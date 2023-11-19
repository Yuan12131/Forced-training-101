// ? Promise.all을 사용해 여러 Promise를 동시에 실행하는 코드

function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('첫 번째 비동기 작업 완료'), 1000);
  });
}

function asyncFunction2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('두 번째 비동기 작업 완료'), 1500);
  });
}

function asyncFunction3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('세 번째 비동기 작업 완료'), 2000);
  });
}

// Promise.all을 사용하여 여러 Promise를 동시에 실행
async function asyncFunctions() {
  try {
    const results = await Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

    console.log('전체 비동기 작업 완료');
    console.log('결과:', results);
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

// 실행
asyncFunctions();