//? try/catch문 활용해 예외 처리 코드

try {
  const a = 10;
  const b = 0;

  if (b === 0) {
    throw "0으로 나눌 수 없습니다.";
  }

  result = a / b;
  console.log(result);
} catch (error) {
  console.error(error);
}

