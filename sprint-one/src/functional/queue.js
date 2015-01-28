var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstInQueue = 1;
  var lastInQueue = 1;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[lastInQueue] = value;
    lastInQueue++;
  };

  someInstance.dequeue = function(){
    var item = storage[firstInQueue];
    delete storage[firstInQueue];
    firstInQueue++;
    return item;
  };

  someInstance.size = function(){
    return lastInQueue - firstInQueue < 0 ? 0 : lastInQueue - firstInQueue;
  };

  return someInstance;
};
