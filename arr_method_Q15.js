// ? 테스트 함수를 통과하는 모든 요소를 모아 새 배열로 반환하는 메서드

const array = [5, 12, 8, 130, 44];

const filtered = array.filter((element) => element > 10);

console.log(filtered);
// Expected output:[ 12, 130, 44 ]