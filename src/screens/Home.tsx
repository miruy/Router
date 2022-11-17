import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
  /* 
    // 빈 배열 users 생성
    const users: any = [];

    // {users[0].name}: 0번째 user의 이름은 null 이므로 에러 발생
    return <h1>{users[0].name}</h1>;
  */

  /* 
    useSearchParams() : get방식의 url의 search parameter를 가져오고(읽고), 수정하는 두개의 배열 요소를 가짐
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.has("key")); // key라는 search parameter를 가졌는가 -> boolean형식의 대답
    console.log(searchParams.get("key")); // key라는 search parameter의 value를 가져와라 -> 해당 key의 value값
    setSearchParams({ // ?key=value 모양의 search parameter를 ?day=today 모양으로 수정
      day: "today",
    }); 
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
