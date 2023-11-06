// ? 조건문에서 truthy와 falsy라는 개념이 무엇인지 설명하고 예시

/*
Truthy 값: 조건식에서 `true`로 간주되는 값 -> 참
Falsy 값: 조건식에서 `false`로 간주되는 값 -> 거짓
*/

// 숫자: 0 이외의 모든 숫자는 truthy
if (42) {
    console.log("이 값은 truthy입니다.");
}

// 문자열: 비어 있지 않은 모든 문자열은 truthy
if ("Hello, world!") {
    console.log("이 값은 truthy입니다.");
}

// 배열 및 객체 비어 있지 않은 배열과 객체는 truthy
const myArray = [1, 2, 3];
if (myArray) {
    console.log("이 값은 truthy입니다.");
}

// null 및 undefined null과 undefined는 falsy
const myVar = null;
if (myVar) {
    console.log("이 값은 falsy입니다.");
}

// false: 불리언 값이 false인 경우 falsy
if (false) {
    console.log("이 값은 falsy입니다.");
}