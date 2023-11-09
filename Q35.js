// ? 객체의 모든 속성 순회

const green = {
  "address" : "대덕대로",
  "number" : 182
}

// Object.keys 
const keys = Object.keys(green);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i] // 각각의 키
  const value = green[key] // 각각의 키에 해당하는 각각의 값

  console.log(value)
}

// for ... in 문
for (const key in green) {
  console.log(key)
  console.log(green[key])
}