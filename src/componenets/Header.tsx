import { Link, useNavigate } from "react-router-dom";

function Header() {
  /*
    useNavigate()
    - 페이지 이동
    - 주로 사용자가 로그인하여 메인페이지로 redirect시키거나, 접근 권한이 없는 페이지로 이동했을 때 사용
  */
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };

  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
