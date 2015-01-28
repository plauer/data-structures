var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentSize = 0;

  // Implement the methods below
  someInstance.push = function(value){
    currentSize ++;
    storage[currentSize] = value;
  };

  someInstance.pop = function(){
    var item = storage[currentSize];
    delete storage[currentSize];
    currentSize = currentSize-1 < 0 ? 0 : currentSize-1;
    console.log(currentSize);
    return item;
  };

  someInstance.size = function(){
    return currentSize;
  };

  return someInstance;
};

var stack = makeStack();
stack.push('a');
stack.pop();
stack.pop();
// console.log(stack.size());
