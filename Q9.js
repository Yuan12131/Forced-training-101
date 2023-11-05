// const, let, var의 차이점

// var : 재선언 무제한 (js의 단점 → 재선언이 불가한 let 추가)
var x = 10;

if (true) {
    var x = 20; // 동일한 변수 'x'를 재선언
}
console.log(x); // 20, 'x'는 전역 스코프에서 재할당됨

// let : 중복 선언이 허용되지 않고 변수의 재할당이 가능하지만 스코프 내에서만 영향
let y = 10;

if (true) {
    let y = 20; // 블록 스코프 내의 새로운 변수 'y'를 선언
}
console.log(y); // 10, 전역 스코프의 'y' 값은 변하지 않음

// const : 중복 선언이 허용되지 않고 변수의 재할당이 불가능
const z = 10;

if (true) {
    const z = 20; // 블록 스코프 내의 새로운 상수 'z'를 선언
}
console.log(z); // 10, 전역 스코프의 'z' 값은 변하지 않음
