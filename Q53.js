// ? get과 set 접근자에 대해 설명하고 사용 예

// 객체의 속성을 읽거나 쓸 때 사용 -> 속성에 대한 동작을 정의하고 사용자가 속성에 접근할 때 추가적인 로직을 실행

// get은 프로퍼티 키를 읽을 때
// set은 프로퍼티 키에 값을 할당할 때
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    // get 접근자
    get diameter() {
        return this._radius * 2;
    }

    // set 접근자
    set diameter(value) {
        if (value > 0) {
            this._radius = value / 2;
        } else {
            console.log("유효하지 않은 값입니다.");
        }
    }
}

const myCircle = new Circle(5);

// set 접근자 사용
myCircle.diameter = 12; // 유효한 값으로 설정
console.log(myCircle._radius); // 출력 결과: 6

myCircle.diameter = -8; // 유효하지 않은 값으로 설정
// 출력 결과: 유효하지 않은 값입니다.
console.log(myCircle._radius); // 출력 결과: 6 (이전 값 유지)
