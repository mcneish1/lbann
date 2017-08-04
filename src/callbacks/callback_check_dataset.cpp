////////////////////////////////////////////////////////////////////////////////
// Copyright (c) 2014-2016, Lawrence Livermore National Security, LLC.
// Produced at the Lawrence Livermore National Laboratory.
// Written by the LBANN Research Team (B. Van Essen, et al.) listed in
// the CONTRIBUTORS file. <lbann-dev@llnl.gov>
//
// LLNL-CODE-697807.
// All rights reserved.
//
// This file is part of LBANN: Livermore Big Artificial Neural Network
// Toolkit. For details, see http://software.llnl.gov/LBANN or
// https://github.com/LLNL/LBANN.
//
// Licensed under the Apache License, Version 2.0 (the "Licensee"); you
// may not use this file except in compliance with the License.  You may
// obtain a copy of the License at:
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
// implied. See the License for the specific language governing
// permissions and limitations under the license.
////////////////////////////////////////////////////////////////////////////////

#include <vector>
#include "lbann/callbacks/callback_check_dataset.hpp"
#include <iomanip>

namespace lbann {

void lbann_callback_check_dataset::add_to_set(model *m, Layer *l, int64_t step, std::set<long>& set) {
  const std::string prefix = m_basename + _to_string(m->get_execution_mode()) + "-model" +
                             std::to_string(m->get_comm()->get_model_rank()) +
                             "-rank" + std::to_string(m->get_comm()->get_rank_in_model()) +
                             "-epoch" + std::to_string(m->get_cur_epoch()) + "-step" +
                             std::to_string(step) + "-layer";
  if (!dynamic_cast<io_layer*>(l) || l->get_index() != 0) {
    return;
  }

  El::Matrix<El::Int>* indices = l->get_sample_indices_per_mb();

  std::set<long>::iterator it;

  for(El::Int i = 0; i < indices->Height(); i++) {
    for(El::Int j = 0; j < indices->Width(); j++) {
      El::Int idx = indices->Get(i,j);
      it = set.find(idx);
      if(it != set.end()) {
        throw lbann_exception(
          std::string{} + __FILE__ + " " + std::to_string(__LINE__)
          + " :: @" + std::to_string(step) 
          + " :: found a duplicate index in being loaded: " + std::to_string(idx));
      }else {
        set.insert(idx);
      }
    }
  }
}

void lbann_callback_check_dataset::on_forward_prop_end(model *m, Layer *l) {
  add_to_set(m, l, m->get_cur_step(), training_set);
}

void lbann_callback_check_dataset::on_evaluate_forward_prop_end(model *m, Layer *l) {
  switch(m->get_execution_mode()) {
  case execution_mode::validation:
    add_to_set(m, l, m->get_cur_validation_step(), validation_set);
    break;
  case execution_mode::testing:
    add_to_set(m, l, m->get_cur_testing_step(), testing_set);
    break;
  default:
    throw lbann_exception("lbann_callback_check_dataset: invalid execution phase");
  }
}

void lbann_callback_check_dataset::on_epoch_end(model *m) {
  std::cout << "Training [" << m->get_comm()->get_rank_in_model() << "] : I have processed " << training_set.size() << " elements" << std::endl;
  
  // Build a vector to hold all of the data from each rank in the model
  //  std::vector<long> global_training_set(m_comm->get_num_models() * m_comm->get_max_mini_batch_size());
  // Build a vector large enough to 
  std::vector<Layer *>& layers = m->get_layers();
  input_layer *input = (input_layer *) dynamic_cast<input_layer *> (layers[0]);
  
  std::vector<long> local_data(input->get_num_iterations_per_epoch(execution_mode::training) * m->get_max_mini_batch_size(), -1);
  std::copy(training_set.begin(), training_set.end(), local_data.data());

#if 0
  std::cout << "Training: my local vector has size " << local_data.size() << std::endl;
  if (m->get_comm()->am_model_master()) {
    std::vector<long> model_training_set(input->get_num_iterations_per_epoch(execution_mode::training) * m->get_max_mini_batch_size() * m->get_comm()->get_procs_per_model(), 0);
    
    std::cout << "Training: my model vector has size " << model_training_set.size() << std::endl;
    m->get_comm()->model_gather(local_data.data(), local_data.size(),
                                model_training_set.data());

    std::cout << "Training: The entire model has processed " << model_training_set.size() << " elements" << std::endl;
    //    model_training_set.clear();
  }else {
    m->get_comm()->model_gather(local_data.data(), local_data.size(),
                                m->get_comm()->get_model_master());
  }
#endif
#if 0
  std::cout << "Training [" << m->get_comm()->get_rank_in_model() << "] ";
  for(std::set<long>::iterator iter=training_set.begin(); iter!=training_set.end();++iter) {
    std::cout << *iter << " ";
  }
  std::cout << std::endl;
#endif
  //  local_data.clear();
  training_set.clear();
}

void lbann_callback_check_dataset::on_validation_end(model *m) {
  std::cout << "Validation [" << m->get_comm()->get_rank_in_model() << "] : I have processed " << validation_set.size() << " elements" << std::endl;
#if 0
  std::cout << "Validation [" << m->get_comm()->get_rank_in_model() << "] ";
  for(std::set<long>::iterator iter=validation_set.begin(); iter!=validation_set.end();++iter) {
    std::cout << *iter << " ";
  }
  std::cout << std::endl;
#endif
  validation_set.clear();
}

void lbann_callback_check_dataset::on_test_end(model *m) {
  std::cout << "Testing [" << m->get_comm()->get_rank_in_model() << "] : I have processed " << testing_set.size() << " elements" << std::endl;
  testing_set.clear();
}

}  // namespace lbann
