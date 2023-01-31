Array.prototype.random = function() {
    return this[Math.floor((Math.random()*this.length))];
}

const arrs = new Map();
Array.prototype.randomFlush = function (identifier) {
    let random = this[Math.floor((Math.random()*this.length))];
    if (!arrs.has(identifier)) arrs.set(identifier, new Set());
    const usedCache = arrs.get(identifier);
    while (usedCache.has(random)) {
        if (usedCache.size === this.length) {
            usedCache.clear();
        };
        random = this[Math.floor((Math.random()*this.length))];
    };
    usedCache.add(random);
    return random;
}; //one wrong move and kaboom

Object.defineProperty(Array.prototype, "splitTo", {
    value: function (size) {
        let returnVal = [];
        for (let i = 0; i < this.length; i += size)
            returnVal.push(this.slice(i, i + size));
        return returnVal;
    }
});

const sliceSize = 9; //fixed
let chunkString = function(s, n = sliceSize) {
    if(s.split && typeof n === "number") {
        var l = s.length,
            z = ~~(l/n),
            zx = (z*n<l) ? l-z*(n-1) : z;
        let a = [];

        for (var i=0; i<n-1; i++) {
            a[i] = s.slice(i*z,i*z+z);
        };

        a[Math.ceil(n-1)] = s.slice(-zx);

        return a;
    } else {
        return false;
    }
};

//this is actually useful
function memoize(fn) {
    let cache = {};
    return function(...args) {
      let key = JSON.stringify(args);
      if (key in cache) {
        return cache[key];
      } else {
        let result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
};


// String.prototype.capitalize() method
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Number.prototype.clamp() method
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

// Function.prototype.before() method
Function.prototype.before = function(beforeFn) {
  return (...args) => {
    beforeFn();
    return this(...args);
  };
};

// Function.prototype.after() method
Function.prototype.after = function(afterFn) {
  return (...args) => {
    let result = this(...args);
    afterFn();
    return result;
  };
};

// Removes duplicates from an array
Array.prototype.unique = function() {
    return [...new Set(this)];
};

// Returns the last item in an array
Array.prototype.last = function() {
    return this[this.length - 1];
};

// Removes an item from an array by value
Array.prototype.remove = function(value) {
  const index = this.indexOf(value);
  if (index !== -1) {
    this.splice(index, 1);
  }
  return this;
};

// Returns the sum of all values in an array of numbers
Array.prototype.sum = function() {
  return this.reduce((sum, value) => sum + value, 0);
};

// Returns the average of all values in an array of numbers
Array.prototype.average = function() {
  return this.sum() / this.length;
};

module.exports = {
   chunkString,
   memoize
};
