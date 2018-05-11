from data_reader_communication_pb2 import Request, Response, FetchDataResponse, Sample, FloatSamples
from connection import Connection

import time

class ExternalDataReader(object):
    'External DataReader: provides data to lbann'

    def __init__(self, connection, address):
        'Initialize external data reader'
        self.connection = Connection(connection, address)

        self.running = True

        self.params = None

    def receive_init_request(self):
        data = self.connection.recv_message()
        message = Request()
        message.ParseFromString(data)
        assert (message.HasField('init_request'))
        return message.init_request

    def handle_init_request(self, message):
        response = Response()
        response.init_response.num_samples = self.params["num_samples"]
        response.init_response.data_size = self.params["data_size"]
        response.init_response.has_labels = self.params["has_labels"]
        response.init_response.num_labels = self.params["num_labels"]
        response.init_response.label_size = self.params["label_size"]
        response.init_response.has_responses = self.params["has_responses"]
        response.init_response.num_responses = self.params["num_responses"]
        response.init_response.response_size = self.params["response_size"]
        response.init_response.data_dims[:] = self.params["data_dims"]
        response.init_response.reader_type = self.params["reader_type"]
        return response

    def send_init_response(self, message):
        data = message.SerializeToString()
        self.connection.send_message(data)

    def receive_data_request(self):
        data = self.connection.recv_message()
        message = Request()
        message.ParseFromString(data)
        if not (message.HasField("fetch_data_request") or
                message.HasField("fetch_responses_request") or
                message.HasField("fetch_labels_request")):
            raise RuntimeError("expected data/label/response request")
        return message

    def handle_data_request(self, message):
        response_message = None
        if message.HasField("fetch_data_request"):
            indices = message.fetch_data_request.indices.value
            data = self.params["data"][indices]
            response_message = Response()
            for datum in data:
                f = FloatSamples(float_samples=datum)
                response_message.fetch_data_response.data.samples.add(float_values=f)
        elif message.HasField("fetch_labels_request"):
            indices = message.fetch_data_request.indices.value
            labels = self.params["labels"][indices]
            response_message = Response()
            for label in labels:
                f = FloatSamples(bool_samples=label)
                response_message.fetch_data_response.data.samples.add(float_values=f)
        elif message.HasField("fetch_responses_request"):
            indices = message.fetch_data_request.indices.value
            responses = self.params["responses"][indices]
            response_message = Response()
            for response in responses:
                f = FloatSamples(float_samples=response)
                response_message.fetch_data_response.data.samples.add(float_values=f)
        return response_message

    def send_data_response(self, message):
        data = message.SerializeToString()
        self.connection.send_message(data)

    def run(self):
        # Init
        request = self.receive_init_request()
        response = self.handle_init_request(request)
        self.send_init_response(response)

        while self.running:
            # TODO add hangup request so things close cleanly
            request = self.receive_data_request()
            response = self.handle_data_request(request)
            self.send_data_response(response)
