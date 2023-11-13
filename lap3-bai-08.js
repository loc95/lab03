let count = 0;
const uocso = (m) => {
  for (let i = 1; i <= m; i++) {
    if (m % i == 0 && i % 2 == 0) {
      count++;
    }
  }
  return count;
};

console.log(uocso(20));
