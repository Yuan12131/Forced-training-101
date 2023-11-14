// ? 메서드를 가진 클래스를 선언하는 코드

class MyClass {
    // constructor 메서드
    constructor(name) {
        this.name = name;
        console.log("construcor 호출")
    }

    // 일반 메서드
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

// 클래스 인스턴스 생성
const myInstance = new MyClass("lee");

// constructor가 호출되고, greet 메서드를 호출
myInstance.greet();
