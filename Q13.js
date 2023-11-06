// ? 자바스크립트에서 대소문자를 구분하는 예

// 변수 및 식별자
var myVariable = 10;
var myvariable = 20;

console.log(myVariable); // 10
console.log(myvariable); // 20


// 객체 속성 및 메서드
var myObject = {
    myProperty: "Value 1",
    myproperty: "Value 2",
};

console.log(myObject.myProperty); // "Value 1"
console.log(myObject.myproperty); // "Value 2"


// `Promise` 생성자 함수 및 관련 메서드 | `promise` 변수
var promise = new Promise(function (resolve, reject) {
    resolve("Resolved!");
});

promise.then(function (result) {
    console.log(result);
});
