// ? Javascript에서 전개연산자를 사용하는 코드

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// 두 배열을 합치기
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // 출력: [1, 2, 3, 4, 5, 6]

// 배열의 일부를 추출하고 나머지는 새로운 배열로 만들기
const [one, two, ...rest] = combinedArray;
console.log(one, two, rest); // 출력: 1 2 [3, 4, 5, 6]

// 배열 구조 분해 예시
const numbers = [1, 2, 3, 4, 5];

// 배열 구조 분해
const [first, second, third, fourth, fifth] = numbers;

// 변수에 할당된 값 출력
console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3
console.log(fourth); // 4
console.log(fifth);  // 5

