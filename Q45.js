// ? 함수 표현식과 함수 선언식의 차이점

// ! 함수 선언식 :
// 코드가 실행되기 전에 메모리에 등록 (호이스팅)
// 따라서 함수를 선언하기 전에 호출 가능
function add(a, b) {
    return a + b;
}


// ! 함수 표현식 (Function Expression):
// 함수 표현식은 코드가 실행되는 동안에 생성
// 함수를 변수에 할당하여 사용하므로, 할당 이후에만 함수를 호출
const add = function(a, b) {
    return a + b;
};

