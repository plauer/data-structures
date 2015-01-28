var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstPosition = 1;
  var currentPosition = 1;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[currentPosition] = value;
    currentPosition++;
  };

  someInstance.dequeue = function(){
    var item = storage[firstPosition];
    delete storage[firstPosition];
    firstPosition++;
    return item;
  };

  someInstance.size = function(){
    return currentPosition - firstPosition < 0 ? 0 : currentPosition - firstPosition;
  };

  return someInstance;
};
