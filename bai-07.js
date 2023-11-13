let n;
let i = 2;
result = "";

function IsPrime(n) {
  if (n < 2) {
    return false;
  }
  let i = 2;
  while (i < n) {
    if (n % 2 == 0) {
      return false;
      i++;
    }
    return true;
  }
}

while (i < n) {
  if (IsPrime(i) == true) {
    result += i + "";
  }
  console.log(result);
}
