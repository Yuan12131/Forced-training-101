// ? 배열의 모든 요소가 주어진 테스트 함수를 통과하는지 테스트하는 메서드

/*
* element : 처리할 배열 내 현재 요소
* index : 처리할 현재 요소의 인덱스
* array : some을 호출한 배열
*/

const array = [2, 5, 8, 1, 4];
const array2 = [12, 22, 33, 44, 55];
function isBiggerThan10(element, index, array) {
  return element > 10;
}

console.log(array.every(isBiggerThan10)); // false
console.log(array2.every(isBiggerThan10)); // true