// ? 선택한 DOM 요소의 텍스트를 변경하는 코드

// 태그 이름을 이용한 요소 선택 (반환 타입은 HTMLCollection)
const root = document.getElementById('root');
root.textContent = "변경된 텍스트"