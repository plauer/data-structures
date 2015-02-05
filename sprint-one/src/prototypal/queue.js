var makeQueue = function() {
  var queue = Object.create(queueMethods);
  queue._storage = {};
  queue._first = 0;
  queue._last = 0;

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function (item) {
  this._storage[this._last] = item;
  this._last++;
};

queueMethods.dequeue = function () {
  var item = this._storage[this._first];
  delete this._storage[this._first];
  this._first++;
  this._first = this._first > this._last ? this._last : this._first;
  return item;
};

queueMethods.size = function () {
  return this._last - this._first;
};
