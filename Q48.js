// ? 클로저에 대해 설명하고 예시

// 클로저 : 함수가 만들어진 환경(스코프)의 변수를 기억하고 그 변수에 접근할 수 있게 하는 것

function outerFunction(x) {
    // innerFunction은 외부 함수인 outerFunction의 변수 x에 접근할 수 있다.
    function innerFunction(y) {
        return x + y;
    }

    // innerFunction을 반환한다.
    return innerFunction;
}

// outerFunction을 호출하면서 x에 10을 전달하고 반환된 innerFunction을 closureExample에 할당
const closureExample = outerFunction(10);

// closureExample을 호출하면서 y에 5를 전달, 이때 outerFunction에서 전달받은 x는 10
const result = closureExample(5);

console.log(result); // 출력 결과: 15

// 'outerFunction'은 'innerFunction' 반환
// -> 반환된 `innerFunction`은 `outerFunction`에서 사용된 변수 `x`에 접근
// `closureExample`이라는 변수에 `innerFunction`이 할당되면, `closureExample`을 호출할 때 외부 함수 `outerFunction`의 변수 `x`를 기억하고 사용