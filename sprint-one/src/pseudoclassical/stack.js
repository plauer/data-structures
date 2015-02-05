var Stack = function() {
  this._storage = {};
  this._currentSize= 0;
};

Stack.prototype.push = function (item) {
  this._currentSize++;
  this._storage[this._currentSize] = item;
};

Stack.prototype.pop = function () {
  var item = this._storage[this._currentSize];
  delete this._storage[this._currentSize];
  this._currentSize = this._currentSize - 1 < 0 ? 0 : this._currentSize - 1;
  return item;
};

Stack.prototype.size = function () {
  return this._currentSize;
};


