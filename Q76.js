// ? Proxy를 사용해 객체의 속성에 대한 접근을 제어하는 코드 작성

// 원본 객체
const originalObject = {
  name: 'John',
  age: 30
};

// Proxy 객체 생성
const proxyObject = new Proxy(originalObject, {
  get: function (target, property, receiver) {
    // get 동작을 가로채서 수정된 동작 수행
    console.log(`Getting value of property "${property}"`);
    return target[property];
  },
  set: function (target, property, value, receiver) {
    // set 동작을 가로채서 수정된 동작 수행
    console.log(`Setting value "${value}" to property "${property}"`);
    target[property] = value;
    return true; // 성공적으로 값을 설정하면 true 반환
  }
});
// 위 코드에서는 Proxy 객체를 생성하면서 set 핸들러를 정의하여 객체의 속성에 값을 할당할 때 동작을 제어
// set 핸들러에서는 간단한 로그를 출력하고 원본 객체에 값을 할당한 후, true를 반환하여 값이 성공적으로 설정되었음을 알림
// proxyObject를 통해 name과 age 프로퍼티에 값을 할당하면 Proxy의 set 동작이 가로채져서 로그가 출력되고, 원본 객체의 값이 변경

// Proxy를 통한 객체 속성에 값 할당
proxyObject.name = 'Jane'; // Proxy를 통해 set 동작이 가로채짐
console.log(proxyObject.name); // Proxy를 통해 get 동작이 가로채짐

proxyObject.age = 25; // Proxy를 통해 set 동작이 가로채짐
console.log(proxyObject.age); // Proxy를 통해 get 동작이 가로채짐
