import logo from './logo.svg';
import './App.css';

// JSX문법
//  - HTML과 JS를 하나의 파일에 작성할 수 잇는 문법

// JSX문법 특징
// 1. 반드시 하나의 요소만 return할 수 있다.
//  + 반드시 <div>태그가 아이어도 된다!

// 2. 자바스크립트 문법은 표현식으로 사용 (return문 안에서)
// 표현식 -> {변수명} or {값} or {조건관련문법}

// 3. React에서는 class속성이 아닌 className속성으로 정의
//    onclick -> onClick으로 정의
//    <a href>...</a> -> <A> (컴포넌트로 인식)
//    * HTML문법은 소문자로 작성
//      대문자는 컴포넌트 개념으로 인식
//    HTML문법 내 내용이 없어도 끝태그는 반드시 작성!

// 4. React에서 스타일 적용 시, 객체형태로 정의
//    스타일속성을 정의할 때 '-'은 작성하지 않는다.
//    대신, 두번째 단어의 첫 글자를 대문자로 작성
//    ex) css문법 font-size
//        JS문법 fontSize

function App() {

    let msg = "React 첫 수업!";
    let num = 11;
    let style = {
        backgroundColor : "black",
        color : "white"
    }
    let result = "";

    if(num === 10){
        console.log("num은 10이다.");
        result = "num은 10이다";
    }else if(num === 11){
        result = "num은 11이다.";
    }else if(num === 12){
        result = "num은 12이다.";
    }

    return (
        <div>
            <div style={style}>
                Hello react!!!! {"React 첫 수업!"}

                {/* 조건부 렌더링 방식 3가지 */}
                {/* 조건이 하나일 때 -> 조건 && 값 */}
                {/* 조건이 true면 값을 출력 */}
                {/* 조건이 false면 출력X */}
                {false && "환영합니다!"}

                {/* 조건이 두개일 때 -> 조건식 ? true일 때 : false일 때 */}
                {/* 조건에 따른 값을 출력할 때 값 또는 HTML문법 정의할 수 있다. */}
                {/* 삼항연산자 이용 */}
                {num===1 ? "num은 "+num+"이다." : <h1 className="txt">num은 {num}이 아니다.</h1>}

                {/* 조건이 세 개 이상일 때 -> return 바깥쪽에 조건문을 만들고 결과값을 출력하는 형태 */}
                {result}
            </div>
            <div>
                Hello react!!!! {msg}
            </div>
        </div>);
}

export default App;
