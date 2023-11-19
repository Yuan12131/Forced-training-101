// ? Javascript에서 배열을 얕은복사와 깊은 복사에 대한 예

const array = [1, 2, [3, 4]];

// 얕은 복사
// 얕은 복사는 원본 배열의 요소들을 새로운 배열로 복사하지만, 배열 안의 객체가 있다면 그 객체는 참조로 복사
// 즉, 원본 배열과 새로운 배열은 같은 객체를 참조
const shallowCopy = array.slice();
shallowCopy[2][0] = 99;

console.log(array); // [1, 2, [99, 4]]
console.log(shallowCopy);   // [1, 2, [99, 4]]


// 깊은 복사
// 깊은 복사는 배열과 배열 안의 객체까지 모두 복사 
// ->  중첩된 객체가 있을 때 얕은 복사를 사용하면 원본 객체와 복사본 객체가 동일한 중첩 객체를 참조하게 되어 문제가 발생할 수 있음 
// -> 깊은 복사를 사용하면 중첩된 객체도 새롭게 생성되어 독립적인 객체
// 이를 위해 일반적으로 재귀 함수나 외부 라이브러리를 사용
function deepCopy(arr) {
  return JSON.parse(JSON.stringify(arr));
}

const deepCopyArray = deepCopy(array);
deepCopyArray[2][0] = 99;
console.log(deepCopyArray);    // [1, 2, [99, 4]]


// 깊은 복사를 위한 함수
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // 기본 자료형이나 null인 경우 복사할 필요 없음
  }

  if (Array.isArray(obj)) {
    // 배열인 경우
    return obj.map(item => deepClone(item));
  } else {
    // 객체인 경우
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
}

// 중첩된 객체를 포함한 배열
const originalArray = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
];

// 깊은 복사
const copiedArray = deepClone(originalArray);

// 복사본 수정
copiedArray[0].age = 40;

// 원본 배열과 복사본 배열의 상태 출력
console.log(originalArray);
console.log(copiedArray);
