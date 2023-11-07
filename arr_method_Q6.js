// 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경

/*
  - start: 배열에서 수정을 시작할 인덱스
  - deleteCount: 삭제할 요소의 개수. 0이면 삭제하지 않음.
  - item1, item2, ... : 배열에 추가할 요소
*/

// *요소 추가
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


const fruits = ["apple", "banana", "cherry", "date", "fig"];

//* 요소 삭제
fruits.splice(1, 2); // 인덱스 1부터 2개의 요소를 삭제
console.log(fruits); // ["apple", "date", "fig"]

//* 요소 교체
fruits.splice(1, 1, "grape", "kiwi"); // 인덱스 1의 요소를 "grape"와 "kiwi"로 교체
console.log(fruits); // ["apple", "grape", "kiwi", "fig"]

//* 요소 추가
fruits.splice(2, 0, "orange", "pear"); // 인덱스 2에 "orange"와 "pear"를 추가
console.log(fruits); // ["apple", "grape", "orange", "pear", "kiwi", "fig"]

