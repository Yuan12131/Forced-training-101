// ?자바스크립트에서 주석을 어떻게 작성하는지 예시

// ! 여러 줄 주석
/*
fetchData 함수를 호출하고 반환된 데이터를 콘솔에 출력
.then을 사용하여 비동기 작업(fetchData 함수의 실행)이 성공적으로 완료되었을 때 실행
fetchData 함수는 fetch 함수를 호출하고, fetch 함수는 Promise를 반환 -> 이 Promise는 원격 데이터 요청을 나타내며, 이 요청이 완료되면 데이터나 오류 정보를 포함한 결과를 반환
*/
fetchData()
    .then(data => {
        console.log(data);
    })

    // ! 한 줄 주석
	// .catch를 사용하여 비동기 작업이 실패했을 때 실행
    .catch(error => {
        console.error(error);
    });
