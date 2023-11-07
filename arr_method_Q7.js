// 두 개 이상의 배열을 결합하여 새 배열을 만드는 메서드

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = [6, 7, 8];

const array4 = array1.concat(array2);
console.log(array4);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


// 두 개 이상의 배열을 결합하여 새 배열 생성
const array5 = array1.concat(array2, array3);

console.log(array5); 
// Expected output: Array ["a", "b", "c", "d", "e", "f", 6, 7, 8]