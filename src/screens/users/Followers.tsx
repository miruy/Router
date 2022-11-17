import { useOutlet, useOutletContext, useParams } from "react-router-dom";

function Followers() {
  // useParams()를 이용하여 부모와 자식 페이지가 데이터를 주고 받는 방법
  //  const { userId } = useParams();
  //  console.log(userId);

  // Outlet / useOutletContext()을 이용하여 부모와 자식 페이지가 데이터를 주고 받는 방법
  // 1. interface로 타입 지정
  interface FollowersContext {
    nameOfMyUser: string;
  }
  // 2. {}안에 context props명 바로 써서 바로 데이터 꺼내기
  const { nameOfMyUser } = useOutletContext<FollowersContext>();
  console.log(nameOfMyUser);

  return <h1>This people is followers of {nameOfMyUser}</h1>;
}

export default Followers;
