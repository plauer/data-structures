var makeStack = function() {
  var stack = _.extend({}, stackMethods);
  stack._storage = {};
  stack._currentSize = 0;
  // _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  'size' : function() {
    return this._currentSize;
    // return Object.keys(this._storage).length;
  },
  'push' : function(item) {
    this._currentSize++;
    this._storage[this._currentSize] = item;
  },
  'pop' : function() {
    var result = this._storage[this._currentSize];
    delete this._storage[this._currentSize];
    this._currentSize = this._currentSize - 1 < 0 ? 0 : this._currentSize - 1;

    return result;
  }
};
console.log('first run');
var stack = makeStack();
console.log(stack._currentSize);
console.log('end');
