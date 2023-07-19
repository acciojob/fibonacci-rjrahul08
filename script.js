function fibonacci(num) {
  // Create an array to store calculated Fibonacci numbers
  const fibArray = [0, 1];

  // Calculate the nth Fibonacci number using dynamic programming (Memoization)
  for (let i = 2; i <= num; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  // Return the nth Fibonacci number
  return fibArray[num];
}

module.exports = fibonacci;
