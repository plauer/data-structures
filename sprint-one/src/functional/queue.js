var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};
  var _first = 1;
  var _last = 1;

  // Implement the methods below

  someInstance.enqueue = function(value){
    _storage[_last] = value;
    _last++;
  };

  someInstance.dequeue = function(){
    var item = _storage[_first];
    delete _storage[_first];
    _first++;
    return item;
  };

  someInstance.size = function(){
    return _last - _first < 0 ? 0 : _last - _first;
  };

  return someInstance;
};
