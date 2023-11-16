// ? set를 사용해 중복을 허용하지 않는 컬렉션을 생성

const person = new Set();

// 값 추가
person.add("lee");
person.add("lee");
person.add(28);

// 값 출력
console.log(person);
