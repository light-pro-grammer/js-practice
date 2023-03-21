function Accumulator(startingValue) {
  this.value = startingValue;

  this.increment = function () {
    this.value++;
  };

  this.decrement = function () {
    this.value--;
  };
}

const accumulator = new Accumulator(5);

console.log(accumulator.value); // 5

accumulator.increment();
console.log(accumulator.value); // 6

accumulator.increment();
console.log(accumulator.value); // 7

accumulator.decrement();
console.log(accumulator.value); // 6

//===================================
function CancelableAccumulator(startingValue) {
  Accumulator.call(this, startingValue);

  this.clear = function () {
    this.value = startingValue;
  };
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

const cancelableAccumulator = new CancelableAccumulator(20);

console.log(cancelableAccumulator.getValue()); // 20

cancelableAccumulator.increment();
console.log(cancelableAccumulator.getValue()); // 21

cancelableAccumulator.increment();
console.log(cancelableAccumulator.getValue()); // 22

cancelableAccumulator.clear();
console.log(cancelableAccumulator.getValue()); // 20
