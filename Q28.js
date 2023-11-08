// ? continue문을 사용해 짝수만 출력하는 코드

for (let i = 0; i < 100; i++){
  if (i % 2 !== 0) {
    continue; // 홀수 -> continue를 사용하여 다시 반복
  }
  console.log(i);
}