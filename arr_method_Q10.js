// 배열의 요소를 적절한 위치에 정렬하는 메서드


// 유니코드 코드 포인트 순서로 정렬
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // [1, 100000, 21, 30, 4]


// 숫자를 오름차순으로 정렬하기 위한 비교 함수
array1.sort(function(a, b) {
  return a - b;
});

console.log(array1); // [1, 4, 21, 30, 100000]
