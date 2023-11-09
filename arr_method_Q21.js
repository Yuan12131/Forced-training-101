// ? reduce()와 같지만 배열의 끝에서부터 함수를 적용하는 메서드

const array = [1, 2, 3, 4];

const sum = array.reduceRight(function(accumulator, currentNumber) {
  return accumulator + currentNumber;
}, 0);

console.log(sum);
// 4 + 3 + 2 + 1