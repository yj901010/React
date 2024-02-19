import React, {useEffect, useState} from "react";

/*
    실습) 참참참 게임 구현해보기
    1. 사용자는 공격, 컴퓨터는 수비 역할입니다.
    2. 사용자가 버튼을 눌렀을 때 사용자와 컴퓨터의 선택이 같다면 사용자(공격)의 승리
        -> 웹 페이지 출력 결과는 "게임 결과 : 승리"
    3. 사용자와 컴퓨터의 선택이 다르다면 컴퓨터(수비)의 승리
        -> 웹 페이지 출력 결과는 "게임 결과 : 패배"

    [활용 기술]
    1. 사용자의 선택, 컴퓨터의 선택, 게임 결과 -> state 관리
    2. 사용자가 누른 버튼의 내용에 접근 -> Event객체
    3. 컴퓨터는 랜덤으로 '좌', '정면', '우'를 출력 -> Math.random() & 배열
    4. 사용자와 컴퓨터가 선택한 값이 바뀌면 결과도 승패로 판별하여 출력 -> useEffect()
 */

const Ex02 = () => {

    let data = ['좌','정면','우'];

    const [user,setUser] = useState();
    const [com,setCom] = useState();
    const [result, setResult] = useState();

    const handleClick = (e) => {
        // 사용자가 선택한 값
        console.log(e.target.innerText);
        setUser(e.target.innerText);

        // 컴퓨터 값을 랜덤으로 생성
        let pos = parseInt(Math.random()*3);
        console.log(data[pos]);
        setCom(data[pos]);
    }

    useEffect(() => {
        // 사용자가 선택한 값과 컴퓨터의 값을 비교 -> 결과를 웹 페이지에 출력
        user === com ? setResult('승리👍') : setResult('패배...🥲');
    }, [user,com]);


  return(
      <div>
          <h1>참참참 게임</h1>

          <h3>나의 선택 : {user}</h3>
          <h3>컴퓨터의 선택 : {com}</h3>

          {com && <h3>게임결과 : {result}</h3>}

          {data.map((item, index)=>(
              <button key={index} onClick={handleClick}>{item}</button>
          ))}
      </div>
  )
}

export default Ex02;