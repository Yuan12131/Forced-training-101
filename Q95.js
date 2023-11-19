// ? Javascript에서 프로토타입 기반 상속을 구현하는 코드 작성

// 부모 객체
function Animal(name) {
  this.name = name;
}

// 부모 객체의 메서드
Animal.prototype.eat = function(food) {
  console.log(`${this.name} is eating ${food}.`);
};

// 자식 객체
function Dog(name, breed) {
  // 부모 객체의 생성자 호출
  Animal.call(this, name);
  this.breed = breed;
}

// 자식 객체가 부모 객체의 속성과 메서드 상속
Dog.prototype = Object.create(Animal.prototype);

// 자식 객체의 메서드 추가
Dog.prototype.bark = function() {
  console.log('Woof!');
};

// 객체 생성
const myDog = new Dog('Buddy', 'Golden Retriever');

// 부모 객체의 메서드 사용
myDog.eat('bones');

// 자식 객체의 메서드 사용
myDog.bark(); // Woof!

// 위 예제에서 Dog는 Animal의 속성과 메서드를 상속받아 사용
// Dog 생성자 함수 내에서 Animal.call(this, name);를 통해 부모 객체의 생성자를 호출하고, Dog.prototype = Object.create(Animal.prototype);를 통해 프로토타입을 공유하여 상속을 구현