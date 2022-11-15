import { Outlet } from "react-router-dom";
import Header from "./componenets/Header";

/*
    <Outlet /> 역할
    - 처음 페이지가 실행 될 때 /를 인식하여 실행
    - 사용자가 어떠한 페이지로 이동하려할 때 Router.tsx의 children에 정의된 해당 경로를 인식하여 실행
    - createBrowserRouter()와 <Outlet /> 사용하여 경로를 지정할 시 <Footer />등도 편리하게 정의할 수 있음
*/
function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
