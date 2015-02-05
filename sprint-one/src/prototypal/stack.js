var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack._storage = {};
  stack._currentSize = 0;

  return stack;
};

var stackMethods = {};

stackMethods.push = function (item) {
  this._currentSize ++;
  this._storage[this._currentSize] = item;
};

stackMethods.pop = function() {
  var item = this._storage[this._currentSize];
  delete this._storage[this._currentSize];
  this._currentSize = this._currentSize - 1 < 0 ? 0 : this._currentSize - 1;
  return item;
};

stackMethods.size = function () {
  return this._currentSize;
};

var stack = makeStack();
console.log(stack._currentSize());
