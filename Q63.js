// ? JSON객체를 사용해 JSON 문자열을 객체로 변환하는 코드

const jsonString = `{"name":"lee","age":28}`;

const jsonParsing = JSON.parse(jsonString);

console.log(jsonParsing)