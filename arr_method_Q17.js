// ? 배열의 각 요소에 대해 주어진 함수를 실행

const items = ["item1", "item2", "item3"];
const copyItems = [];

// for문
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// forEach 메서드
items.forEach((item) => {
  copyItems.push(item);
});
console.log(copyItems);