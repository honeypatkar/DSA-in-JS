function recursiveFibonacci(n) {
  if (n < 2) return n;
  else return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0));
