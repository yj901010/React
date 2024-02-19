import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

/*
    Life Cycle(생명주기)
    - React 컴포넌트의 생성부터 소멸까지 이르는 일련의 과정
    - 생명주기 시점 : Mount, Update, UpMount
     1. Mount : 컴포넌트가 화면에 처음 그려진 상태
        ex) 서버통신으로 데이터 받아올 때 - open api, 자체 server
     2. Update : props, state, 부모 컴포넌트에 변화가 생겼을 때 리렌더링되는 상태
        ex) 특정 state값이 변경되었을 때 실행할 로직을 구현
     3. UnMount : 컴포넌트가 화면에서 사라진 상태
 */
function App() {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);

  // 버튼을 클릭했을 때, num1에 +1 증가되도록 구현해보기
  // - state값을 변경할 때에는 set함수 활용!
  // Mount : 첫 렌더링 시 호출되는 방식
  // 구현방법: useEffect(()=>{ 실행할 로직 작성 },[])
  // * []를 생략하면 렌더링될 때마다 useEffect()가 호출된다!
  useEffect(()=>{
      console.log('App컴포넌트 동작!');
      console.log('첫 렌더링 완료!')
      console.log('num1의 값: ', num1);
      console.log('num2의 값: ', num2);
  },[])

    // Update : state가 변경되었을 때 호출되는 시점
    //useEffect(() => {
    //    console.log('state 변화 감지!')
    //    console.log('num1의 값: ',num1);
    //}, [num1]);

    //useEffect(() => {
    //    console.log('state 변화 감지!')
    //    console.log('num2의 값: ',num2);
    //}, [num2]);

    useEffect(() => {
        console.log('state 변화 감지!',num1,num2);

        // 감시하고 있는 state값을 변경하는 함수를 useEffect() 안에 구현하면
        // 무한반복
        //setNum1(num1+1)
    }, [num1, num2]);

  return (
    <div>
      <h1>Life Cycle - useEffect()</h1>
      <p>
        <span>{num1}</span>
        <button onClick={()=>setNum1(num1+1)}>num1증가</button>
        <button onClick={()=>setNum2(num2+1)}>num2증가</button>
      </p>
    </div>
  );
}

export default App;
