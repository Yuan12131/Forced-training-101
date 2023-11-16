// ? Promise를 선언하고 사용

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(`성공`);
    } else {
      reject(`실패`);
    }
  }, 1000);
});

