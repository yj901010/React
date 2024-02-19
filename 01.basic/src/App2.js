function App2(){

    let name = prompt('이름을 입력하세요.');

    // 날짜 관련 정보를 가진 객체
    const today = new Date();

    // 년,월,일 가져오기
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    // 현재날짜를 반환하는 함수
    console.log(today.toLocaleDateString());

    let season = "";
    // 계절을 판단하는 조건문
    if(month >= 3 && month <= 5){
        season = "봄";
    }else if(month >= 6 && month <= 8){
        season = "여름";
    }else if(month >= 9 && month <= 11){
        season = "가을";
    }else if(month === 12 || month === 1 || month === 2){
        season = "겨울";
    }

    return(
        <div>
            <h1>{today.toLocaleDateString()}</h1>
            <hr/>
            <p>{name}님 지금은 {season}입니다. 좋은 하루 보내세요!</p>
        </div>
    )
}

export  default App2;