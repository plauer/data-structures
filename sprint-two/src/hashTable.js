var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // create bucket if one doesn't exist
  var bucket = this._storage.get(i);
  if (!bucket) {
    bucket = [];
    this._storage.set(i, bucket);
  }

  var found = false;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // if key exists, replace the value
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  }

  // if not found, insert tuple
  if (!found) {
    bucket.push([k,v]);
    this._count++;
    if (this._count > this._limit * 0.75) {
      this._resize(this._limit * 2);
    }
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      // ok to modify because we immediately return
      bucket.splice(i, 1);
      this._count--;
      console.log(this._limit);
      if (this._count < this._limit * 0.25) {
        this._resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype._resize = function (newLimit) {
  var oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = makeLimitedArray(newLimit);
  this._count = 0;

  //iterate over old storage and re insert
  oldStorage.each(function(bucket) {
    if (!bucket) { return;}
    // re-insert tuples
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
