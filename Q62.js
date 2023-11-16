// ? JSON 객체를 사용해 JSON 문자열로 변환하는 코드

const person = {
  name: "lee",
  age: 28,
};

const jsonString = JSON.stringify(person);

console.log(jsonString);
