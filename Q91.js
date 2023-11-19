// ? Node.js에서 fs 모듈을 사용하여 디렉토리 생성

import fs from 'fs';
const directoryPath = 'newDirectory';

// 디렉토리 생성
fs.mkdir(directoryPath, (err) => {
    if (err) {
        console.error('디렉토리 생성 중 오류 발생:', err);
    } else {
        console.log('디렉토리가 성공적으로 생성되었습니다.');
    }
});
