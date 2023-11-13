a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //tìm số trong mảng tổng bằng k
// k = 23;
// j = a.length - 1;
// let i = 0;
// while (i < j) {
//   sum = a[i] + a[j];
//   if (sum == k) {
//     break;
//   } else if (sum > k) {
//     j--;
//   } else i++;
// }
// // console.log(i);
// // console.log(j);
let max = 0;
let max2 = 0;

//cách 1

// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   }
// }

// for (let i = 0; i < a.length; i++) {
//   if (max == a[i]) {
//     continue;
//   }
//   if (a[i] > max2) {
//     max2 = a[i];
//   }
// }
// console.log(max);
// console.log(max2);

//cách 2

const FindMax2nd = (arr) => {
  let max = 0;
  let max2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max2 = max;
      max = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }
  return max2;
};
const arr = [1, 2, 3, 4, 5, 6, 10, 15, 12];
console.log("arr", arr);
const result = FindMax2nd(arr);
console.log("result", result);
