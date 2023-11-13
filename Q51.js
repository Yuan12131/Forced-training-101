// ? 생성자를 가진 클래스를 선언

class MyClass {
    // 클래스의 생성자 메서드
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 클래스 메서드
    greet() {
        console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
    }
}

// 클래스의 인스턴스 생성
const myInstance = new MyClass("lee", 28);

// 클래스 메서드 호출
myInstance.greet();
