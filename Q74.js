// ? 비동기 함수에서 예외를 처리하는 방법을 설명하고 예시

// 예외가 발생할 수 있는 코드를 포함한 함수
function someFunction() {
  // 예외를 발생시키는 예시
  throw new Error('This is an example error');
}

try {
  // 예외가 발생할 수 있는 코드
  const result = someFunction();
  console.log(result);
} catch (error) {
  // 예외가 발생한 경우 처리
  console.error('An error occurred:', error);
} finally {
  // 항상 실행되는 코드
  console.log('Cleanup');
}
