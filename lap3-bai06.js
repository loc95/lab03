//let prompt = require("prompt-sync")();

const FindDivisor = (n) => {
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      console.log(" Các Ước số là: ", i);
    }
  }
};

FindDivisor(20);
