// ? Node.js에서 npm 패키지를 설치하고 사용하는 코드

// npm Express.js 사용
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