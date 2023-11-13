// ? 콜백함수를 사용하는 코드

const add = (a, b, callback) => callback(a + b);

const result = add(3, 5, (result) => {
    return result;
});

console.log(result);
