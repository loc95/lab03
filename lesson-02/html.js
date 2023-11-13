// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 1000); // sự bất đồng bộ của var
// }

function sum(a, b) {
  a = a + 2;
  return a + b;
}

let sum1 = sum(2,3);
console.log(sum1);
