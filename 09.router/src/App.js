import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import {useState} from "react";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import ProductDetail2 from "./pages/ProductDetail2";

function App() {

    const [loginState, setLoginState] = useState(false);

    console.log(loginState);

    // 로그인 상태를 체크하여 해당 컴포넌트를 반환하는 함수
    // 로그인한 상태(true) : <MyPage />
    // 비로그인 상태(false) : <Login />
    const PrivateRoute = () => {
        return loginState ? <MyPage /> : <Navigate to="/login" />;
    }

  return (
      <Routes>
          {/*
          Route 컴포넌트 : 사용자의 요청 RUL 경로에 맞는 컴포넌트를 렌더링해주는 역할
          path 속성 : 요청 URL 경로
          element 속성 : 렌더링할 컴포넌트
          */}
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>

        {/* Product 페이지로 이동하는 Route 컴포넌트 생성해보기 */}
        <Route path='/product' element={<Product />} />
        {/* useParams()를 사용할 때 아래와 같이 URL에 변수명 설정 */}
        <Route path='/product/:pro_no/:cate' element={<ProductDetail />} />
        {/*
            /mypage 요청이 들어왔을 때, privateRoute에서 로그인 상태를 체크하고
            그에 맞는 컴포넌트를 렌더링해주는 역할
         */}
        <Route path='/mypage' element={<PrivateRoute/>} />
        <Route path='/login' element={<Login setLoginState={setLoginState} />} />
        {/* useSearchParams()를 사용할 때는 경로만 설정 */}
        <Route path='/productDetail2' element={<ProductDetail2 />} />
      </Routes>
  );
}

export default App;
