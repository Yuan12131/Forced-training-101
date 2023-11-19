// ? Express.js에서 정적파일을 호스팅하는 방법을 설명하고 예

import express from 'express';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, './')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './', 'Q81.html'));
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});
