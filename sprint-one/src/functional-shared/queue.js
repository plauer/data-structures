var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = _.extend({}, queueMethods);
  queue._storage = {};
  queue._first = 1;
  queue._last = 1;

  return queue;
};

var queueMethods = {
};

queueMethods.enqueue = function (item) {
  this._storage[this._last] = item;
  this._last++;
};

queueMethods.dequeue = function () {
  var item = this._storage[this._first];
  delete this._storage[this._first];
  this._first = this._first > this._last ? this._last : this._first+ 1;
  return item;
};

queueMethods.size = function () {
  return this._last - this._first < 0 ? 0 : this._last - this._first;
};

// var queue = makeQueue();
// queue.enqueue('a');
// queue.enqueue('b');
// console.log(queue)

