
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
  }
  return collection;
}


function myMap(collection, callback) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key]));
      }
    }
  }
  return result;
}


function myReduce(collection, callback, acc) {
  let values = Array.isArray(collection) ? collection.slice() : Object.values(collection);
  
  if (acc === undefined) {
    acc = values[0];
    values = values.slice(1);
  }

  for (let val of values) {
    acc = callback(acc, val, collection);
  }

  return acc;
}


function myFind(collection, predicate) {
  for (let val of collection) {
    if (predicate(val)) return val;
  }
  return undefined;
}


function myFilter(collection, predicate) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let val of collection) {
      if (predicate(val)) result.push(val);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}


function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}


function myFirst(array, n) {
  return n === undefined ? array[0] : array.slice(0, n);
}


function myLast(array, n) {
  return n === undefined ? array[array.length - 1] : array.slice(-n);
}


function myKeys(obj) {
  return Object.keys(obj);
}


function myValues(obj) {
  return Object.values(obj);
}
