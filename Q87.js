// ? Node.js에서 환경변수를 사용하는 방법을 설명하고 예

import express from 'express';

const app = express();
// 환경변수를 사용하는 것은 process.env 객체를 통해 가능
// 이 객체는 현재 프로세스의 환경변수를 나타내며, 해당 변수들을 사용하여 애플리케이션의 동작을 동적으로 설정
// process.env.PORT는 환경변수에서 포트 번호를 가져오며, 만약 해당 환경변수가 설정되어 있지 않다면 기본값으로 3000을 사용
// 이렇게 함으로써 애플리케이션을 실행할 때 포트 번호를 명시적으로 지정하지 않아도 되며, 환경변수를 통해 동적으로 지정
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});
