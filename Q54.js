// ? 클래스의 인스턴스를 생성하는 코드

// 클래스 정의
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
    }
}

// 클래스의 인스턴스 생성
const person1 = new Person("lee", 28);

// 생성된 인스턴스 사용
person1.greet();