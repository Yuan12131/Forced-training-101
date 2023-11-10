const list1 = ["이유안", "이은정", "김우진", "정영식", "김현", "최성민", "김유안"];
const list2 = ["피카츄", "라이츄", "꼬부기", "파이리"];

const Q1 = list1.join();
console.log(Q1);

const Q2 = list1.pop();
console.log(Q2);

// Q3
// list1.splice(2,1,"공욱재");
// console.log(list1);

// Q4
// list1.reverse();
// console.log(list1);

const Q5 = list1.indexOf("이유안");
console.log(Q5);

const Q6 = list1.findLastIndex(
  function (name){
    return name.includes("유안")
  }
)
console.log(Q6)

const Q7 = list1.filter(
  function(name){
    return name.startsWith("김")
  }
);

console.log(Q7);


const Q8 = list1.concat(list2);
console.log(Q8);

const Q9 = list1.map(
  function (name){
    return "학생_" + name
  }
);
console.log(Q9)

const Q10 = list1.join('')
console.log(Q10);

const Q11 = list1.every(
  function (name){
    return name.length === 3
  }
)
console.log(Q11);

const Q13 = list1.slice(1,5);
console.log(Q13);

const Q14 = list1.filter(
  function (name){
    return name.includes("이")
  }
)

console.log(Q14)

const Q15 = list1.some(function(name) {
  return name[0] === "정";
});

console.log(Q15);