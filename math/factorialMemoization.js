function Factorial() {
  var cache = {};

  this.calculate = function(n) {
    if(cache[n]) {
      return cache[n];
    }

    if(n <= 1) {
      return 1;
    }

    console.log(n);
    return cache[n] = n * this.calculate(n - 1);
  };
}
