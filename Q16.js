// ? typeof 연산자를 사용해 변수의 타입을 확인하는 예제 코드

const age = 27;
const name = "lee";
const isStudent = true;
const colors = ["red", "green", "blue"];
const person = { name: "lee", age: 27 };

const greet = function(name) {
    console.log("Hello, " + name + "!");
};

console.log(typeof age);       // "number"
console.log(typeof name);      // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof colors);    // "object"
console.log(typeof person);    // "object"
console.log(typeof greet);     // "function"
