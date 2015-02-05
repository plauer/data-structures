var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (this.tail === null && this.head === null) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  };

  list.removeHead = function(){
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
  };

  list.contains = function(target){
    var recurseMe = function (node) {
      if (node.value === target) return true;
      if (node.next !== null) {
        return recurseMe(node.next);
      }
      return false;
    };

    return recurseMe(this.head);
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



