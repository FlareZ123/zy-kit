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
};

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

module.exports = {
   chunkString: chunkString
};
