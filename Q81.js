// ? Lacal Storage에 데이터를 저장하고 검색하는 코드

// 데이터 저장
function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// 데이터 검색
function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// 예제 데이터
const exampleData = {
  name: "lee",
  age: 28,
};

// 데이터를 Local Storage에 저장
saveToLocalStorage("userData", exampleData);

// Local Storage에서 데이터를 불러와서 콘솔에 출력
const retrievedData = getFromLocalStorage("userData");
console.log(retrievedData);
