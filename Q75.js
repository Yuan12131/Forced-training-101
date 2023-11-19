// ? proxy 객체를 생성하는 코드

// 원본 객체
const originalObject = {
  name: 'John',
  age: 30
};

// Proxy 객체 생성
// Proxy 객체는 특정 객체에 대한 중간자 역할을 하는 객체로, 해당 객체에 대한 다양한 동작을 가로챔
// Proxy를 생성하려면 new Proxy(target, handler)를 사용
// target은 프록시로 감싸고자 하는 객체이며, handler는 프록시 동작을 정의하는 핸들러 객체
const proxyObject = new Proxy(originalObject, {
  get: function (target, property, receiver) {
    // get 동작을 가로채서 수정된 동작 수행
    console.log(`Getting value of property "${property}"`);
    return target[property];
  }
});
// 위 코드에서 Proxy 객체를 생성하면서 get 핸들러를 정의
// 이 핸들러는 원본 객체의 프로퍼티에 접근할 때마다 동작하는데, 여기에서는 간단한 로그를 출력하고 원본 객체의 프로퍼티 값을 반환
// proxyObject를 통해 name과 age 프로퍼티에 접근할 때 Proxy의 get 동작이 가로채져서 로그가 출력되고, 원본 객체의 값을 반환

// Proxy를 통한 객체 접근
console.log(proxyObject.name); // Proxy를 통해 get 동작이 가로채짐
console.log(proxyObject.age);  // Proxy를 통해 get 동작이 가로채짐
