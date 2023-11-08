// ? 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환하는 메서드

const array = [5, 12, 8, 130, 44];

const found = array.findIndex((element) => element > 10);

console.log(found);
// Expected output: 1