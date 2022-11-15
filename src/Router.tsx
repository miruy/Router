import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";

// createBrowserRouter() : Router(경로)를 배열 형식으로 가지는 메서드
const router = createBrowserRouter([
  {
    // / : Home도 아니고 그 무엇도 아닌 / 자체를 의미, 부모 경로
    path: "/",
    element: <Root />,

    // /의 자식들, 자식 경로
    children: [
      {
        path: "", // 자식 경로를 빈 문자열로 정의 시 부모 경로인 /와 같게 인식
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
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
