// ? Node.js 에서 파일을 읽는 코드

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
