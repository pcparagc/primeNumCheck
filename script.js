function Prime(n) {
  if (n < 2) {
    return console.log(`${n} is not a Prime Number`);
  }
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return console.log(`${n} is not a Prime Number`);
    }
    return console.log(`${n} is a Prime Number`);
  }
}

//passs the number you want to check
Prime(8194);
