// ? Node.js에서 이벤트를 발생시키고 그것을 처리하는 코드

import EventEmitter from 'events';

// 이벤트 발생기 생성
const myEmitter = new EventEmitter();

// 이벤트 핸들러 등록
myEmitter.on('event', () => {
  console.log('이벤트가 발생했습니다.');
});

// 이벤트 발생
myEmitter.emit('event');
