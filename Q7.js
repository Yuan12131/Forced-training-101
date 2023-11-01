// js에서 null과 undefined의 차이점을 설명

// null은 의도적으로 변수에 "없음"을 할당
const a = null;
console.log(a);

// undefined : 변수 선언은 되었으나 할당 값 없을 때
var b;
console.log(b);

// 함수의 매개변수에 호출 시 값을 전달하지 않으면
function un(a) {
  console.log(a); // 매개변수 'a'는 여기서 undefined
}

// 객체에 해당 속성이 존재하지 않을 때
var obj = {
  name: "lee"
};
console.log(obj.age);