// ? Map 객체를 사용해 키-쌍의 컬렉션을 생성

// 빈 Map 생성
const person = new Map();

// 키-값 추가
person.set('name', 'lee');
person.set('age', 28);

// 키-값 출력
console.log(person);

// 값에 접근
console.log(person.get('name')); 
console.log(person.get('age')); 
