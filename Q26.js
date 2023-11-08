// ? switch문을 사용해 변수가 어떤 값인지 분기하는 코드

// switch문은 어떤 값을 가진 대상을 두고 조건값과 일치하는지를 확인하고 동작을 수행

let a = 2;

// case문 안에서, 해당 조건값과 일치했을 때 동작해야 될 코드를 작성
switch(a) {
    case 1:
        console.log('a는 1입니다.');
        break;
    case 2:
        console.log('a는 2입니다.'); // a는 2입니다.
        break;
    default:
        console.log('a는 1도 2도 아닙니다.');
}