var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.currentSize = 0;

  return stack;
};

var stackMethods = {};

stackMethods.push = function (item) {
  this.currentSize ++;
  this.storage[this.currentSize] = item;
};

stackMethods.pop = function() {
  var item = this.storage[this.currentSize];
  delete this.storage[this.currentSize];
  this.currentSize = this.currentSize - 1 < 0 ? 0 : this.currentSize - 1;
  return item;
};

stackMethods.size = function () {
  return this.currentSize;
};

var stack = makeStack();
console.log(stack.currentSize())
