// ? 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새 배열로 반환

const array = [1, 4, 9, 16];

// Pass a function to map
const map = array.map((x) => x * 2);

console.log(map);
// Expected output: Array [2, 8, 18, 32]