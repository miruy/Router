import { Routes, Route, createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./componenets/ErrorComponent";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";

// createBrowserRouter() : Router(경로)를 배열 형식으로 가지는 메서드
// children(자식)안에서도 부모-자식 형태의 경로 설정 가능 (참고:노마드코더 masterclass 4.5 4:00)
const router = createBrowserRouter([
  {
    // Home도 아니고 그 무엇도 아닌 / 자체를 의미, 부모 경로
    path: "/",
    element: <Root />,

    // /의 자식들, 자식 경로
    children: [
      {
        path: "", // 자식 경로를 빈 문자열로 정의 시 부모 경로인 /와 같게 인식
        element: <Home />,
        errorElement: <ErrorComponent />, // 에러 경로, /Home에서 에러 발생 시 실행
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
      },
    ],

    // 에러 경로, 자식 경로가 아닌 경로를 요청 시 실행
    errorElement: <NotFound />,
  },
]);

/* 
    - 기존 Router 방식 
    function Router() {
        return (
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            </BrowserRouter>
        );
    }
*/

export default router;
