// ? cjs방식과 esm 방식의 차이점

// CJS : 동기적, require() 및 module.exports를 사용
const myFunction = () => { /* 함수 내용 */ };
module.exports = myFunction;

// 모듈 가져오기
const myModule = require('./my-module');


// ESM : 비동기적, import 및 export 문 사용
const myFunction2 = () => { /* 함수 내용 */ };
export { myFunction2 };
// 모듈 가져오기
import { myFunction2 } from './my-module';