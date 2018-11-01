class Factorial {
  static get cache() {
    return {}
  }

  static calculate(n) {
    if(Factorial.cache[n]) {
      return Factorial.cache[n]
    }

    if(n <= 1) {
      return 1
    }

    return Factorial.cache[n] = n * Factorial.calculate(n - 1)
  }
}
