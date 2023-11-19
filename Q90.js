// ? Javascript에서 map, filter, reduce 함수 사용 예

const array = [1, 2, 3, 4, 5];

const mapArray = array.map(number => number * 2);
console.log(mapArray);

const filterArray = array.filter(number => number < 5);
console.log(filterArray);

const reduceArray = array.reduce((accumulator, current) => accumulator + current, 0);
console.log(reduceArray);