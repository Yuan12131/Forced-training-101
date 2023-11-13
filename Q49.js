// ? 함수 매개변수 기본값을 설정하는 코드

// 매개변수에 기본값 설정
// 함수를 호출할 때 매개변수에 값이 전달되면 전달된 값이 사용되고, 값이 전달되지 않으면 각각의 매개변수에 설정된 기본값이 사용
function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

// 매개변수에 값 전달
greet("John", "Hi"); // 출력 결과: Hi, John!
greet("Alice"); // 출력 결과: Hello, Alice!
greet(); // 출력 결과: Hello, Guest!
