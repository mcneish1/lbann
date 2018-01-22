var NAVTREE =
[
  [ "LBANN", "index.html", [
    [ "Overview", "index.html", [
      [ "LBANN Development Team", "index.html#team", null ],
      [ "License", "index.html#license", null ]
    ] ],
    [ "Getting Started", "getting_started.html", [
      [ "Download", "getting_started.html#getting_started_download", null ],
      [ "Building LBANN", "getting_started.html#getting_started_building", [
        [ "Livermore Computing Build", "getting_started.html#lc", null ],
        [ "Spack Build", "getting_started.html#spack", null ],
        [ "OSX Build", "getting_started.html#osx", null ],
        [ "Dependency List", "getting_started.html#dependencies", null ]
      ] ],
      [ "Basic Usage", "getting_started.html#getting_started_basicusage", [
        [ "Verification", "getting_started.html#verification", null ]
      ] ]
    ] ],
    [ "Callbacks", "callbacks.html", [
      [ "Check Dataset", "callbacks.html#checkdata", null ],
      [ "Check Initialization", "callbacks.html#checkinit", null ],
      [ "Check Reconstruction", "callbacks.html#checkreconstruction", null ],
      [ "Check NAN", "callbacks.html#checknan", null ],
      [ "Check Small", "callbacks.html#checksmall", null ],
      [ "Dump Activations", "callbacks.html#dump_acts", null ],
      [ "Dump Gradients", "callbacks.html#dump_grads", null ],
      [ "Dump Minibatch Sample Indices", "callbacks.html#dump_mb_sample_indices", null ],
      [ "Dump Weights", "callbacks.html#dump_wei", null ],
      [ "Early Stopping", "callbacks.html#earlystop", null ],
      [ "Gradient Check", "callbacks.html#gradientcheck", null ],
      [ "Hang", "callbacks.html#hang", null ],
      [ "Inter-model Communication", "callbacks.html#im_comm", null ],
      [ "Print IO", "callbacks.html#io", null ],
      [ "Learning Rate", "callbacks.html#learningrate", null ],
      [ "Manage LTFB", "callbacks.html#LTFB", null ],
      [ "Print Accuracy", "callbacks.html#print_acc", null ],
      [ "Save Images", "callbacks.html#save_images", null ],
      [ "Summary", "callbacks.html#summary", null ],
      [ "Timer", "callbacks.html#timer", null ],
      [ "Debug", "callbacks.html#dbg", null ],
      [ "Variable Minibatch", "callbacks.html#variable_mb", null ]
    ] ],
    [ "Layers", "layers.html", [
      [ "Learning", "layers.html#learning", [
        [ "Convolution", "layers.html#conv", null ],
        [ "Deconvolution", "layers.html#deconv", null ],
        [ "Fully Connected", "layers.html#ip", null ]
      ] ],
      [ "Regularizer", "layers.html#regularizer", [
        [ "Batch Normalization", "layers.html#batchNorm", null ],
        [ "Dropout", "layers.html#dropout", null ],
        [ "Selu Dropout", "layers.html#selu_dropout", null ],
        [ "Local Response Norm Layer", "layers.html#local_response_norm_layer", null ]
      ] ],
      [ "Transform", "layers.html#transform", [
        [ "Concatenation", "layers.html#concatenation", null ],
        [ "Noise", "layers.html#noise", null ],
        [ "Unpooling", "layers.html#unpooling", null ],
        [ "Pooling", "layers.html#pooling", null ],
        [ "Reshape", "layers.html#reshape", null ],
        [ "Slice", "layers.html#slice", null ],
        [ "Split", "layers.html#split", null ],
        [ "Sum", "layers.html#sum", null ]
      ] ],
      [ "Activation", "layers.html#activation", [
        [ "Identity", "layers.html#idlayer", null ],
        [ "Rectified Linear Unit", "layers.html#reluLayer", null ],
        [ "Leaky Relu", "layers.html#leakyrelu", null ],
        [ "Smooth Relu", "layers.html#smoothrelu", null ],
        [ "Exponential Linear Unit", "layers.html#expLinUn", null ],
        [ "Scaled Elu", "layers.html#seluLayer", null ],
        [ "Sigmoid", "layers.html#sigLayer", null ],
        [ "Softplus", "layers.html#softplus", null ],
        [ "Softmax", "layers.html#softmax", null ],
        [ "Tanh", "layers.html#tanh", null ],
        [ "Atan", "layers.html#atan", null ],
        [ "Bent Identity", "layers.html#bent_identity", null ],
        [ "Exponential", "layers.html#exponential", null ]
      ] ],
      [ "IO", "layers.html#i_o", [
        [ "Input", "layers.html#input", null ],
        [ "Target", "layers.html#target", null ]
      ] ]
    ] ],
    [ "Metrics", "metrics.html", [
      [ "Categorical Accuracy", "metrics.html#cataccuracy", null ],
      [ "Mean Absolute Deviation", "metrics.html#mean_abs_dev", null ],
      [ "Mean Squared Error", "metrics.html#mse", null ],
      [ "Pearson Correlation", "metrics.html#pearson", null ],
      [ "Top K Categorical Accuracy", "metrics.html#top_k", null ]
    ] ],
    [ "Objective Functions", "obj_fn.html", [
      [ "Loss Functions", "obj_fn.html#loss_functions", [
        [ "Binary Cross Entropy", "obj_fn.html#bin_cross_ent", null ],
        [ "Cross Entropy", "obj_fn.html#cross_ent", null ],
        [ "Cross Entropy with Uncertainty", "obj_fn.html#cross_ent_uncertain", null ],
        [ "Geometric Negative Log Likelihood", "obj_fn.html#gemo_negloglike", null ],
        [ "Mean Absolute Deviation", "obj_fn.html#mad", null ],
        [ "Mean Squared Error", "obj_fn.html#m_s_e", null ],
        [ "Poisson Negative Log Likelihood", "obj_fn.html#pos_negloglike", null ],
        [ "Polya Negative Log Likelihood", "obj_fn.html#poly_negloglike", null ]
      ] ],
      [ "Weight Regularization", "obj_fn.html#weight_regularization", [
        [ "L2 Weight Regularization", "obj_fn.html#l2_weight", null ]
      ] ]
    ] ],
    [ "Optimizers", "optimizers.html", [
      [ "Adagrad", "optimizers.html#Adagrad", null ],
      [ "Adam", "optimizers.html#Adam", null ],
      [ "Hypergradient Adam", "optimizers.html#hadam", null ],
      [ "RMSprop", "optimizers.html#rmsp", null ],
      [ "SGD", "optimizers.html#SGD", null ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", null, [
      [ "Namespace List", "namespaces.html", "namespaces" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", null, [
      [ "Class List", "annotated.html", "annotated" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", null, [
      [ "File List", "files.html", "files" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"Elemental__extensions_8cpp.html",
"classlbann_1_1DataGenerator.html#a676e679d18eb0523be714345205c662d",
"classlbann_1_1base__convolution__layer.html#a98d1340db9b5e128744afbd951870ec8",
"classlbann_1_1data__reader__merge__samples.html#ab39ad6b6e106eb30f58f9eabaf3352ad",
"classlbann_1_1generic__data__reader.html#a4ee1a159c74561c15a5e0c267ad3cc6a",
"classlbann_1_1generic__target__layer.html#ab1bf1a639db82f2dd6ef3994f2269ec2",
"classlbann_1_1l1__weight__regularization.html#a984a36b0df8d6017874b95faaef97c7a",
"classlbann_1_1lbann__callback__hang.html#a047660bd517f5c669c8e2abc4f2e951f",
"classlbann_1_1lbann__callback__variable__minibatch.html#ac78d3d357e1c16b3303cf358aee8a83d",
"classlbann_1_1lbann__quantizer.html#a2324bba3cbb6c0d3e51bbe21555e7f1a",
"classlbann_1_1model.html#ab123ed691fb6e9f52d468914a1f4460c",
"classlbann_1_1polya__negloglike.html#a35d76a08dea5203c4f70e48260adf1ec",
"classlbann_1_1slice__layer.html#ae077f139e1e0b53cc7f0ae9df89bcabb",
"comm_8cpp.html#a7a92ceb4ddf57dc156d3a1b39f3ab962",
"file__io_8hpp.html#a6084b9319eea1997f8446fa3e6879532",
"l1_8hpp_source.html",
"persist_8hpp_source.html",
"structlbann_1_1generic__input__layer_1_1dataset__header.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
var navTreeSubIndices = new Array();

function getData(varName)
{
  var i = varName.lastIndexOf('/');
  var n = i>=0 ? varName.substring(i+1) : varName;
  return eval(n.replace(/\-/g,'_'));
}

function stripPath(uri)
{
  return uri.substring(uri.lastIndexOf('/')+1);
}

function stripPath2(uri)
{
  var i = uri.lastIndexOf('/');
  var s = uri.substring(i+1);
  var m = uri.substring(0,i+1).match(/\/d\w\/d\w\w\/$/);
  return m ? uri.substring(i-6) : s;
}

function localStorageSupported()
{
  try {
    return 'localStorage' in window && window['localStorage'] !== null && window.localStorage.getItem;
  }
  catch(e) {
    return false;
  }
}


function storeLink(link)
{
  if (!$("#nav-sync").hasClass('sync') && localStorageSupported()) {
      window.localStorage.setItem('navpath',link);
  }
}

function deleteLink()
{
  if (localStorageSupported()) {
    window.localStorage.setItem('navpath','');
  } 
}

function cachedLink()
{
  if (localStorageSupported()) {
    return window.localStorage.getItem('navpath');
  } else {
    return '';
  }
}

function getScript(scriptName,func,show)
{
  var head = document.getElementsByTagName("head")[0]; 
  var script = document.createElement('script');
  script.id = scriptName;
  script.type = 'text/javascript';
  script.onload = func; 
  script.src = scriptName+'.js'; 
  if ($.browser.msie && $.browser.version<=8) { 
    // script.onload does not work with older versions of IE
    script.onreadystatechange = function() {
      if (script.readyState=='complete' || script.readyState=='loaded') { 
        func(); if (show) showRoot(); 
      }
    }
  }
  head.appendChild(script); 
}

function createIndent(o,domNode,node,level)
{
  var level=-1;
  var n = node;
  while (n.parentNode) { level++; n=n.parentNode; }
  if (node.childrenData) {
    var imgNode = document.createElement("img");
    imgNode.style.paddingLeft=(16*level).toString()+'px';
    imgNode.width  = 16;
    imgNode.height = 22;
    imgNode.border = 0;
    node.plus_img = imgNode;
    node.expandToggle = document.createElement("a");
    node.expandToggle.href = "javascript:void(0)";
    node.expandToggle.onclick = function() {
      if (node.expanded) {
        $(node.getChildrenUL()).slideUp("fast");
        node.plus_img.src = node.relpath+"ftv2pnode.png";
        node.expanded = false;
      } else {
        expandNode(o, node, false, false);
      }
    }
    node.expandToggle.appendChild(imgNode);
    domNode.appendChild(node.expandToggle);
    imgNode.src = node.relpath+"ftv2pnode.png";
  } else {
    var span = document.createElement("span");
    span.style.display = 'inline-block';
    span.style.width   = 16*(level+1)+'px';
    span.style.height  = '22px';
    span.innerHTML = '&#160;';
    domNode.appendChild(span);
  } 
}

var animationInProgress = false;

function gotoAnchor(anchor,aname,updateLocation)
{
  var pos, docContent = $('#doc-content');
  if (anchor.parent().attr('class')=='memItemLeft' ||
      anchor.parent().attr('class')=='fieldtype' ||
      anchor.parent().is(':header')) 
  {
    pos = anchor.parent().position().top;
  } else if (anchor.position()) {
    pos = anchor.position().top;
  }
  if (pos) {
    var dist = Math.abs(Math.min(
               pos-docContent.offset().top,
               docContent[0].scrollHeight-
               docContent.height()-docContent.scrollTop()));
    animationInProgress=true;
    docContent.animate({
      scrollTop: pos + docContent.scrollTop() - docContent.offset().top
    },Math.max(50,Math.min(500,dist)),function(){
      if (updateLocation) window.location.href=aname;
      animationInProgress=false;
    });
  }
}

function newNode(o, po, text, link, childrenData, lastNode)
{
  var node = new Object();
  node.children = Array();
  node.childrenData = childrenData;
  node.depth = po.depth + 1;
  node.relpath = po.relpath;
  node.isLast = lastNode;

  node.li = document.createElement("li");
  po.getChildrenUL().appendChild(node.li);
  node.parentNode = po;

  node.itemDiv = document.createElement("div");
  node.itemDiv.className = "item";

  node.labelSpan = document.createElement("span");
  node.labelSpan.className = "label";

  createIndent(o,node.itemDiv,node,0);
  node.itemDiv.appendChild(node.labelSpan);
  node.li.appendChild(node.itemDiv);

  var a = document.createElement("a");
  node.labelSpan.appendChild(a);
  node.label = document.createTextNode(text);
  node.expanded = false;
  a.appendChild(node.label);
  if (link) {
    var url;
    if (link.substring(0,1)=='^') {
      url = link.substring(1);
      link = url;
    } else {
      url = node.relpath+link;
    }
    a.className = stripPath(link.replace('#',':'));
    if (link.indexOf('#')!=-1) {
      var aname = '#'+link.split('#')[1];
      var srcPage = stripPath($(location).attr('pathname'));
      var targetPage = stripPath(link.split('#')[0]);
      a.href = srcPage!=targetPage ? url : "javascript:void(0)"; 
      a.onclick = function(){
        storeLink(link);
        if (!$(a).parent().parent().hasClass('selected'))
        {
          $('.item').removeClass('selected');
          $('.item').removeAttr('id');
          $(a).parent().parent().addClass('selected');
          $(a).parent().parent().attr('id','selected');
        }
        var anchor = $(aname);
        gotoAnchor(anchor,aname,true);
      };
    } else {
      a.href = url;
      a.onclick = function() { storeLink(link); }
    }
  } else {
    if (childrenData != null) 
    {
      a.className = "nolink";
      a.href = "javascript:void(0)";
      a.onclick = node.expandToggle.onclick;
    }
  }

  node.childrenUL = null;
  node.getChildrenUL = function() {
    if (!node.childrenUL) {
      node.childrenUL = document.createElement("ul");
      node.childrenUL.className = "children_ul";
      node.childrenUL.style.display = "none";
      node.li.appendChild(node.childrenUL);
    }
    return node.childrenUL;
  };

  return node;
}

function showRoot()
{
  var headerHeight = $("#top").height();
  var footerHeight = $("#nav-path").height();
  var windowHeight = $(window).height() - headerHeight - footerHeight;
  (function (){ // retry until we can scroll to the selected item
    try {
      var navtree=$('#nav-tree');
      navtree.scrollTo('#selected',0,{offset:-windowHeight/2});
    } catch (err) {
      setTimeout(arguments.callee, 0);
    }
  })();
}

function expandNode(o, node, imm, showRoot)
{
  if (node.childrenData && !node.expanded) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        expandNode(o, node, imm, showRoot);
      }, showRoot);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      } if (imm || ($.browser.msie && $.browser.version>8)) { 
        // somehow slideDown jumps to the start of tree for IE9 :-(
        $(node.getChildrenUL()).show();
      } else {
        $(node.getChildrenUL()).slideDown("fast");
      }
      if (node.isLast) {
        node.plus_img.src = node.relpath+"ftv2mlastnode.png";
      } else {
        node.plus_img.src = node.relpath+"ftv2mnode.png";
      }
      node.expanded = true;
    }
  }
}

function glowEffect(n,duration)
{
  n.addClass('glow').delay(duration).queue(function(next){
    $(this).removeClass('glow');next();
  });
}

function highlightAnchor()
{
  var aname = $(location).attr('hash');
  var anchor = $(aname);
  if (anchor.parent().attr('class')=='memItemLeft'){
    var rows = $('.memberdecls tr[class$="'+
               window.location.hash.substring(1)+'"]');
    glowEffect(rows.children(),300); // member without details
  } else if (anchor.parents().slice(2).prop('tagName')=='TR') {
    glowEffect(anchor.parents('div.memitem'),1000); // enum value
  } else if (anchor.parent().attr('class')=='fieldtype'){
    glowEffect(anchor.parent().parent(),1000); // struct field
  } else if (anchor.parent().is(":header")) {
    glowEffect(anchor.parent(),1000); // section header
  } else {
    glowEffect(anchor.next(),1000); // normal member
  }
  gotoAnchor(anchor,aname,false);
}

function selectAndHighlight(hash,n)
{
  var a;
  if (hash) {
    var link=stripPath($(location).attr('pathname'))+':'+hash.substring(1);
    a=$('.item a[class$="'+link+'"]');
  }
  if (a && a.length) {
    a.parent().parent().addClass('selected');
    a.parent().parent().attr('id','selected');
    highlightAnchor();
  } else if (n) {
    $(n.itemDiv).addClass('selected');
    $(n.itemDiv).attr('id','selected');
  }
  if ($('#nav-tree-contents .item:first').hasClass('selected')) {
    $('#nav-sync').css('top','30px');
  } else {
    $('#nav-sync').css('top','5px');
  }
  showRoot();
}

function showNode(o, node, index, hash)
{
  if (node && node.childrenData) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        showNode(o,node,index,hash);
      },true);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      }
      $(node.getChildrenUL()).css({'display':'block'});
      if (node.isLast) {
        node.plus_img.src = node.relpath+"ftv2mlastnode.png";
      } else {
        node.plus_img.src = node.relpath+"ftv2mnode.png";
      }
      node.expanded = true;
      var n = node.children[o.breadcrumbs[index]];
      if (index+1<o.breadcrumbs.length) {
        showNode(o,n,index+1,hash);
      } else {
        if (typeof(n.childrenData)==='string') {
          var varName = n.childrenData;
          getScript(n.relpath+varName,function(){
            n.childrenData = getData(varName);
            node.expanded=false;
            showNode(o,node,index,hash); // retry with child node expanded
          },true);
        } else {
          var rootBase = stripPath(o.toroot.replace(/\..+$/, ''));
          if (rootBase=="index" || rootBase=="pages" || rootBase=="search") {
            expandNode(o, n, true, true);
          }
          selectAndHighlight(hash,n);
        }
      }
    }
  } else {
    selectAndHighlight(hash);
  }
}

function removeToInsertLater(element) {
  var parentNode = element.parentNode;
  var nextSibling = element.nextSibling;
  parentNode.removeChild(element);
  return function() {
    if (nextSibling) {
      parentNode.insertBefore(element, nextSibling);
    } else {
      parentNode.appendChild(element);
    }
  };
}

function getNode(o, po)
{
  var insertFunction = removeToInsertLater(po.li);
  po.childrenVisited = true;
  var l = po.childrenData.length-1;
  for (var i in po.childrenData) {
    var nodeData = po.childrenData[i];
    po.children[i] = newNode(o, po, nodeData[0], nodeData[1], nodeData[2],
      i==l);
  }
  insertFunction();
}

function gotoNode(o,subIndex,root,hash,relpath)
{
  var nti = navTreeSubIndices[subIndex][root+hash];
  o.breadcrumbs = $.extend(true, [], nti ? nti : navTreeSubIndices[subIndex][root]);
  if (!o.breadcrumbs && root!=NAVTREE[0][1]) { // fallback: show index
    navTo(o,NAVTREE[0][1],"",relpath);
    $('.item').removeClass('selected');
    $('.item').removeAttr('id');
  }
  if (o.breadcrumbs) {
    o.breadcrumbs.unshift(0); // add 0 for root node
    showNode(o, o.node, 0, hash);
  }
}

function navTo(o,root,hash,relpath)
{
  var link = cachedLink();
  if (link) {
    var parts = link.split('#');
    root = parts[0];
    if (parts.length>1) hash = '#'+parts[1];
    else hash='';
  }
  if (hash.match(/^#l\d+$/)) {
    var anchor=$('a[name='+hash.substring(1)+']');
    glowEffect(anchor.parent(),1000); // line number
    hash=''; // strip line number anchors
    //root=root.replace(/_source\./,'.'); // source link to doc link
  }
  var url=root+hash;
  var i=-1;
  while (NAVTREEINDEX[i+1]<=url) i++;
  if (i==-1) { i=0; root=NAVTREE[0][1]; } // fallback: show index
  if (navTreeSubIndices[i]) {
    gotoNode(o,i,root,hash,relpath)
  } else {
    getScript(relpath+'navtreeindex'+i,function(){
      navTreeSubIndices[i] = eval('NAVTREEINDEX'+i);
      if (navTreeSubIndices[i]) {
        gotoNode(o,i,root,hash,relpath);
      }
    },true);
  }
}

function showSyncOff(n,relpath)
{
    n.html('<img src="'+relpath+'sync_off.png" title="'+SYNCOFFMSG+'"/>');
}

function showSyncOn(n,relpath)
{
    n.html('<img src="'+relpath+'sync_on.png" title="'+SYNCONMSG+'"/>');
}

function toggleSyncButton(relpath)
{
  var navSync = $('#nav-sync');
  if (navSync.hasClass('sync')) {
    navSync.removeClass('sync');
    showSyncOff(navSync,relpath);
    storeLink(stripPath2($(location).attr('pathname'))+$(location).attr('hash'));
  } else {
    navSync.addClass('sync');
    showSyncOn(navSync,relpath);
    deleteLink();
  }
}

function initNavTree(toroot,relpath)
{
  var o = new Object();
  o.toroot = toroot;
  o.node = new Object();
  o.node.li = document.getElementById("nav-tree-contents");
  o.node.childrenData = NAVTREE;
  o.node.children = new Array();
  o.node.childrenUL = document.createElement("ul");
  o.node.getChildrenUL = function() { return o.node.childrenUL; };
  o.node.li.appendChild(o.node.childrenUL);
  o.node.depth = 0;
  o.node.relpath = relpath;
  o.node.expanded = false;
  o.node.isLast = true;
  o.node.plus_img = document.createElement("img");
  o.node.plus_img.src = relpath+"ftv2pnode.png";
  o.node.plus_img.width = 16;
  o.node.plus_img.height = 22;

  if (localStorageSupported()) {
    var navSync = $('#nav-sync');
    if (cachedLink()) {
      showSyncOff(navSync,relpath);
      navSync.removeClass('sync');
    } else {
      showSyncOn(navSync,relpath);
    }
    navSync.click(function(){ toggleSyncButton(relpath); });
  }

  $(window).load(function(){
    navTo(o,toroot,window.location.hash,relpath);
    showRoot();
  });

  $(window).bind('hashchange', function(){
     if (window.location.hash && window.location.hash.length>1){
       var a;
       if ($(location).attr('hash')){
         var clslink=stripPath($(location).attr('pathname'))+':'+
                               $(location).attr('hash').substring(1);
         a=$('.item a[class$="'+clslink+'"]');
       }
       if (a==null || !$(a).parent().parent().hasClass('selected')){
         $('.item').removeClass('selected');
         $('.item').removeAttr('id');
       }
       var link=stripPath2($(location).attr('pathname'));
       navTo(o,link,$(location).attr('hash'),relpath);
     } else if (!animationInProgress) {
       $('#doc-content').scrollTop(0);
       $('.item').removeClass('selected');
       $('.item').removeAttr('id');
       navTo(o,toroot,window.location.hash,relpath);
     }
  })
}

