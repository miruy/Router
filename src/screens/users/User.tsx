import { Outlet, useParams, Link } from "react-router-dom";
import { users } from "../../db";

function User() {
  // url 파라미터 데이터 가져오기
  // {}안에 Router.tsx에 정의한 다이나믹파라미터 명(:userId)과 동일하게 작성 시 바로 값을 가져옴
  const { userId } = useParams();
  console.log(userId);

  return (
    <div>
      <h1>
        {/* 
            users[Number(userId) - 1].name : 
            - users[0].name를 생각하면 이해 쉬움
            - 산술연산자의 경우 왼쪽의 타입을 메서드 형태로 표시해야함
     */}
        User with it {userId} is named : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      {/* 
          - <Outlet />은 사용되는 현재 페이지의 자식 경로를 대체함
          - 현재 페이지인 User 페이지의
              - 자식 경로로 정의한 페이지가 없다면 실행되지 않음
              - 자식 경로로 정의한 페이지가 있다면 실행됨(Followers 페이지)
          
          - <Link to=""> 에서 
            - /followers라고 하면 절대 경로이므로 / 이후 바로 followers가 되는 경로로 생성됨(localhost:3000/follwers)
            - 따라서 그냥 followers라는 상대 경로로 정의 해주어야 현재 페이지 뒤에 붙어서 경로가 생성됨 (localhost:3000/users/1/followers)
       */}
      <Link to="followers">See followers</Link>

      {/* 
          - <Outlet context={}/>
          - react-router-dom에서 제공하는 props
          - Outlet을 이용해 부모와 자식페이지가 데이터를 주고 받는 방법
          - 현재 페이지가 가지고 있는 모든 자식 페이지에게 해당 context데이터가 전송됨
      */}
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}

export default User;
