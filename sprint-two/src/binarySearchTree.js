var makeBinarySearchTree = function(value){
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.insert = function (newVal) {
    (function traverseTree (node) {
      if (newVal < node.value && node.left !== null) {
        traverseTree(node.left);
      }
      else if (newVal > node.value && node.right !== null) {
        traverseTree(node.right);
      }
      else if (newVal < node.value && node.left === null) {
        node.left = new makeBinarySearchTree(newVal);
      }
      else if (newVal > node.value && node.right === null) {
        node.right = new makeBinarySearchTree(newVal);
      }
    })(this);
  };

  tree.contains = function (target) {
    return (function traverseTree (node) {
      if (target === node.value) {
        return true;
      }
      else if (target < node.value && node.left !== null) {
        return traverseTree(node.left);
      }
      else if (target > node.value && node.right !== null) {
        return traverseTree(node.right);
      }
      else {
        return false;
      }
    })(this);
  };

  tree.depthFirstLog = function (func) {
    (function traverseTree (node) {
      // if we have hit the deepest node
      if (node.right === null && node.left === null) {
        func.call(null, node.value);
      }
      else if (node.left !== null && node.right === null) {
        func.call(null, node.value);
        traverseTree(node.left);
      }
      else if (node.right !== null && node.left === null) {
        func.call(null, node.value);
        traverseTree(node.right);
      }
      else if (node.right !== null && node.left !== null) {
        func.call(null, node.value);
        traverseTree(node.left);
        traverseTree(node.right);
      }
    })(this);
  };

  return tree;
};

// var binarySearchTree = makeBinarySearchTree(5);
// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// console.log(binarySearchTree.contains(7));

/*
 * Complexity: What is the time complexity of the above functions?
 */
