Array.prototype.pow = function (n) {
  return this.map(function (x) {
    return Math.pow(x, n);
  });
};

let arr = [1, 2, 3];
console.log(arr.pow(2)); // [1, 4, 9]

Function.prototype.defer = function (ms) {
  let self = this;
  return function (...args) {
    setTimeout(() => {
      self.apply(this, args);
    }, ms);
  };
};

function a() {
  console.log('test');
}

let deferredA = a.defer(1000);
deferredA(); // виведе "test" через 1 секунду
