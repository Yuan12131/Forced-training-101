// ? Node.js에서 비동기 함수 사용 예

import fs from "fs"
const filePath = 'Q81.html';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('파일을 읽는 중 에러 발생:', err);
    return;
  }

  // 파일의 내용 출력
  console.log('파일 내용:', data);
});
