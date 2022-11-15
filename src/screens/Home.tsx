import { Link } from "react-router-dom";
import { users } from "../db";

function Home() {
  /* 
    // 빈 배열 users 생성
    const users: any = [];

    // {users[0].name}: 0번째 user의 이름은 null 이므로 에러 발생
    return <h1>{users[0].name}</h1>;
  */

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {/* user DB의 정의한 user 데이터를 map으로 꺼냄 */}
        {users.map((user) => (
          <li key={user.id}>
            {/* {user.name을 누르면 /users/${user.id}로 이동 */}
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
