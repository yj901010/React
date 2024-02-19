import './App.css';

// 컴포넌트 불러오기
// 사용한 이름의 첫글자는 반드시 대문자로 작성!
import BaseCard from './Components/BaseCard';

function App2() {

    return (
        <div>
            <BaseCard team = "KIA" name = "강병우"/>
            <BaseCard team = "SSG" name = "김광현"/>
            <BaseCard team = "두산" name = "김동주"/>
            <BaseCard team = "한화" name = "문동주"/>
        </div>
    );
}

export default App2;
