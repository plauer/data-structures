var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if (this.value === target) return true;
  var children = this.children;
  while (children.length) {
    var newChildren = [];
    for (var i = 0; i < children.length; i++) {
      if (children[i].value === target) return true;
      if (children[i].children.length) {
        newChildren = newChildren.concat(children[i].children);
      }
    }
    children = newChildren;
  }
  return false
};

var tree = makeTree(1)
console.log(tree)
tree.addChild(2)
tree.addChild(3)
tree.children[0].addChild(4)
tree.children[1].addChild('meow')
console.log(tree)
console.log(tree.contains('meow'))
console.log(tree.contains(7))


/*
 * Complexity: What is the time complexity of the above functions?
 */
