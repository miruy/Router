import { useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  // url 파라미터 데이터 가져오기
  // {}안에 Router.tsx에 정의한 다이나믹파라미터 명(:userId)과 동일하게 작성 시 바로 값을 가져옴
  const { userId } = useParams();
  console.log(userId);

  return (
    <h1>
      {/* 
            users[Number(userId) - 1].name : 
            - users[0].name를 생각하면 이해 쉬움
            - 산술연산자의 경우 왼쪽의 타입을 메서드 형태로 표시해야함
     */}
      User with it {userId} is named : {users[Number(userId) - 1].name}
    </h1>
  );
}

export default User;
