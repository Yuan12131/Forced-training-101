// ? 먼저 주어진 함수를 배열의 각 요소에 매핑한 다음 결과를 새 배열로 평탄화하는 메서드

const array = [1, 2, 3, 4, 5];

// 각 요소를 제곱하고 결과를 중첩 배열로 유지
const nestedSquares = array.map(function(number) {
  return [number * number];
});

console.log(nestedSquares); // [[1], [4], [9], [16], [25]]

// 평탄화한 새 배열
const flatNestedSquares = array.flatMap(function(number) {
  return [number * number];
});

console.log(flatNestedSquares);