var Graph = function(value){
  this.value = value;
  this.edges = [];
};

Graph.prototype.addNode = function(newVal, toVal){
  var newNode = new Graph();
  newNode.value = newVal;
  if (toVal) {
    (function recurseGraph (node) {
      if (node.value === toVal) {
        node.edges.push(newNode);
        return;
      }
      if (node.edges.length) {
        for (var i = 0; i < node.edges.length; i++) {
          return recurseGraph(node.edges[i]);
        }
      }
    })(this);
  } else {
    this.edges.push(newNode);
  }
};

Graph.prototype.contains = function(value){
  var found = false;
  (function recurseGraph (node) {
    if (node.value === value) {
      return found = true;
    }
    if (node.edges.length) {
      for (var i = 0; i < node.edges.length; i++) {
        return recurseGraph(node.edges[i]);
      }
    }
  })(this);
  return found;
};

Graph.prototype.removeNode = function(value){
  return (function recurseGraph (node, parentNode, index) {
    if (node.value === value) {
      return parentNode.edges.splice(index, 1);
    }
    if (node.edges.length) {
      for (var i = 0; i < node.edges.length; i++) {
        return recurseGraph(node.edges[i], node, i);
      }
    }
  })(this);
};

Graph.prototype.getEdge = function(fromNode, toNode){

  var edges = (function recurseGraph (node, value, parentNode) {
    // var parentNode = parentNode || node;
    if (node.value === value) {
      return parentNode.edges;
    }
    if (node.edges.length) {
      for (var i = 0; i < node.edges.length; i++) {
        return recurseGraph(node.edges[i], value, node);
      }
    }
  })(this, fromNode);

  var foundEdges = 0;
  for (var i = 0; i < edges.length; i++) {
    if (edges[i].value === fromNode || edges[i].value === toNode) {
      foundEdges++;
    }
  }
  if (foundEdges === 2) {
    return true;
  }
  return false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
