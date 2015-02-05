var Queue = function() {
  this._storage = {};
  this._first = 0;
  this._last = 0;
};

Queue.prototype.enqueue = function (item) {
  this._storage[this._last] = item;
  this._last++;
};

Queue.prototype.dequeue = function () {
  var item = this._storage[this._first];
  delete this._storage[this._first];
  this._first ++;
  this._first = this._first > this._last ? this._last : this._first;
  return item;
};

Queue.prototype.size = function () {
  return this._last - this._first;
};

