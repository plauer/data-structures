var makeStack = function() {
  var stack = _.extend({}, stackMethods);
  stack.storage = {};
  stack.currentSize = 0;
  // _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  'size' : function() {
    return this.currentSize;
    // return Object.keys(this.storage).length;
  },
  'push' : function(item) {
    this.currentSize++;
    this.storage[this.currentSize] = item;
  },
  'pop' : function() {
    var result = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    this.currentSize = this.currentSize - 1 < 0 ? 0 : this.currentSize - 1;

    return result;
  }
};
console.log('first run');
var stack = makeStack();
console.log(stack.currentSize);
console.log('end');
