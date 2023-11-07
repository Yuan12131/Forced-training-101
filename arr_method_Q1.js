// 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환

const fruits = ["apple", "banana", "cherry"];

// 하나 이상의 요소를 배열의 끝에 추가
let newLength = fruits.push("orange");
console.log(fruits);    // ["apple", "banana", "cherry", "orange"]
console.log(newLength); // 4 (새로운 배열의 길이)

// 여러 요소를 배열의 끝에 추가
const moreFruits = ["fig", "grape"];
newLength = fruits.push(...moreFruits);
console.log(fruits);    // ["apple", "banana", "cherry", "orange", "fig", "grape"]
console.log(newLength); // 6 (새로운 배열의 길이)
