// 배열의 모든 요소를 연결해 하나의 문자열로 만드는 메서드


// separator : 배열의 각 요소를 구분할 문자열을 지정, 생략하면 배열의 요소들이 쉼표로 구분, 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
