var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (this.tail === null && this.head === null) {
      this.tail = this.head = node;
      return
    }

    this.tail.next = node;
    this.tail = node;
  };

  list.removeHead = function(){
    var oldHead = this.head.value
    this.head = this.head.next;
    return oldHead
  };

  list.contains = function(target){
    var recurseMe = function (node) {
      if (node.value === target) return true;
      if (node.next !== null) {
        return recurseMe(node.next)
      }
      return false
    }

    return recurseMe(this.head)
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var linkedList = makeLinkedList();
linkedList.addToTail(4);
linkedList.addToTail(7);
linkedList.addToTail(5);
console.log(linkedList.contains(4))
console.log(linkedList.contains(5))
console.log(linkedList.contains(7))
console.log(linkedList.contains(6))


/*
 * Complexity: What is the time complexity of the above functions?
 */

// A linkedList class, in functional style, with the following properties:
// .head property, a linkedListNode instance
// .tail property, a linkedListNode instance
// .addToTail() method, takes a value and adds it to the end of the list
// .removeHead() method, removes the first node from the list and returns its value
// .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
// What is the time complexity of the above functions?



