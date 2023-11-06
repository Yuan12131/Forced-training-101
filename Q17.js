// ? 자바스크립트에서 ==과 ===의 차이점

console.log(5 == "5");   // true
console.log(5 === "5");  // false

console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(true == 1);  // true
console.log(true === 1); // false

// == 은 값만 비교, 데이터타입은 비교 불가
// === 은 값과 데이터타입 모두 비교
