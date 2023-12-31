// VSCODE에서 지원하는 JSDoc의 기능

// 문서화 주석을 추가하는 데 사용되는 주석 스타일 -> 코드 내에서 함수, 변수, 클래스, 메서드 등을 설명하고 문서화하는 데 사용
// JSDoc 주석은 코드의 가독성을 향상시키고, 자동 문서 생성 도구와 통합하여 프로젝트의 API 문서를 생성할 때 활용

/**
 * 여기에 설명을 작성
 * @tag {타입} 이름 - 설명
 * ...
 */


// 여기서 `/**`로 시작하여 `*/`로 끝나는 주석 블록을 사용
// 주석 내부에 `@tag`를 사용하여 태그와 관련 정보를 추가

/*
*`@param`: 함수의 매개변수에 대한 설명.
*`@returns`: 함수가 반환하는 값에 대한 설명.
*`@typedef`: 새로운 타입을 정의할 때 사용.
*`@property`: 객체의 속성을 설명할 때 사용.
*`@description`: 일반적인 설명 블록.
*`@example`: 코드 예제를 추가할 때 사용.
*/

/* 
`addNumbers` 함수를 설명
`@param` 태그를 사용하여 매개변수 `a`와 `b`의 타입과 설명을 제공
`@returns` 태그를 사용하여 함수의 반환 값에 대한 정보를 제공
*/

/**
 * 이 함수는 두 숫자를 더하는 역할을 합니다.
 * @param {number} a - 첫 번째 숫자
 * @param {number} b - 두 번째 숫자
 * @returns {number} - 두 숫자의 합
 */
function addNumbers(a, b) {
    return a + b;
}