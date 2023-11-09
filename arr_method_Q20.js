// ? 배열의 각 요소에 대해 주어진 리듀서(reducer)함수를 실행하고 하나의 결과값을 반환하는 메서드

/*
* 리듀서 함수
* arr.reduce(callback[, initialValue])

* 매개변수 - callback
- 누적자 (Accumulator): 리듀서 함수가 현재까지의 누적 결과를 나타내는 변수 또는 값 -> 리듀서 함수가 각 요소를 처리하면서 업데이트
- 현재 요소 (Current Element): 리듀서 함수가 현재 처리 중인 배열의 요소
- initialValue (Optional) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값, 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용, 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생

* reduce() 메서드는 리듀서 함수를 인자로 받아 배열의 모든 요소를 처리하고 최종 결과를 반환
*/

const array = [1, 2, 3, 4];

const sum = array.reduce(function(accumulator, currentNumber) {
  return accumulator + currentNumber;
}, 0);

console.log(sum);
// Expected output: 10
