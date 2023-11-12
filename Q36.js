// ? this 키워드에 대해 설명하고 사용 예

// this 키워드는 실행 중인 코드에서 해당 코드가 속한 객체를 참조하는 데 사용되고, 함수나 메서드 내에서 호출될 때 동적으로 결정

// 메서드(객체 내에서 정의된 함수) 내에서
const myObject = {
  property: "Hello",
  myMethod: function() {
      console.log(this.property);
  }
};

myObject.myMethod(); // 출력: Hello

// 생성자 함수 
function MyClass(value) {
  this.property = value;
}

// new 키워드를 사용하여 MyClass 생성자 함수를 호출하면서 인스턴스를 생성
const myInstance = new MyClass("Hello");
console.log(myInstance.property); // 출력: Hello
