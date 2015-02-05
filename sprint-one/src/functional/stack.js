var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};
  var _currentSize = 0;

  // Implement the methods below
  someInstance.push = function(value){
    _currentSize ++;
    _storage[_currentSize] = value;
  };

  someInstance.pop = function(){
    var item = _storage[_currentSize];
    delete _storage[_currentSize];
    _currentSize = _currentSize-1 < 0 ? 0 : _currentSize-1;
    return item;
  };

  someInstance.size = function(){
    return _currentSize;
  };

  return someInstance;
};

