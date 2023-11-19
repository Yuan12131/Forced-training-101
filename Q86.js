// ? Express.js에서 라우팅을 처리하는 코드 작성

import express from 'express';

const app = express();
const port = 3000;

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use('/', router);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});