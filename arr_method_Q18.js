// ? 배열의 어떤 요소라도 주어진 테스트 함수를 통과하는 테스트하는 메서드

/*
* element : 처리할 배열 내 현재 요소
* index : 처리할 현재 요소의 인덱스
* array : some을 호출한 배열
*/

const array = [2, 5, 8, 1, 4];
const array2 = [12, 5, 8, 1, 4];
function isBiggerThan10(element, index, array) {
  return element > 10;
}

console.log(array.some(isBiggerThan10)); // false
console.log(array2.some(isBiggerThan10)); // true