// ? Node.js에서 Http 서버 생성 코드

import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Node.js HTTP Server!\n');
});
const port = 3000;

server.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});
