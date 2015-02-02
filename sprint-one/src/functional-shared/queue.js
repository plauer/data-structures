var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = _.extend({}, queueMethods);
  queue.storage = {};
  queue.firstInQueue = 1;
  queue.lastInQueue = 1;

  return queue;
};

var queueMethods = {
};

queueMethods.enqueue = function (item) {
  this.storage[this.lastInQueue] = item;
  this.lastInQueue++;
};

queueMethods.dequeue = function () {
  var item = this.storage[this.firstInQueue];
  delete this.storage[this.firstInQueue];
  this.firstInQueue = this.firstInQueue > this.lastInQueue ? this.lastInQueue : this.firstInQueue+ 1;
  return item;
};

queueMethods.size = function () {
  return this.lastInQueue - this.firstInQueue < 0 ? 0 : this.lastInQueue - this.firstInQueue;
};

// var queue = makeQueue();
// queue.enqueue('a');
// queue.enqueue('b');
// console.log(queue)

