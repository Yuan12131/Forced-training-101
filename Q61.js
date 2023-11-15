// ? date 객체를 사용해 현재시간 출력

// 현재 시간을 나타내는 Date 객체 생성
const currentDate = new Date();

// 년, 월, 일, 시, 분, 초를 가져오기
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// 출력
console.log(`현재 시간: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
