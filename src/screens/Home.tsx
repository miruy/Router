function Home() {
  // 빈 배열 users 생성
  const users: any = [];

  // {users[0].name}: 0번째 user의 이름은 null 이므로 에러 발생
  return <h1>{users[0].name}</h1>;
}

export default Home;
