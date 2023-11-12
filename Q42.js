// ? 배열의 모든 원소를 순회하여 출력

const array = [1, 2, 3, 4, 5]

for(let i = 0; i < array.length; i++){
  console.log(array[i])
}

array.forEach(function(element) {
  console.log(element);
});