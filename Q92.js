// ? Node.js에서 path 모듈을 사용하여 파일 경로를 조작하는 코드
import path  from 'path'

// 상대 경로를 절대 경로로 변환
const absolutePath = path.resolve('Q92.js');
console.log('절대 경로:', absolutePath);
