import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import Heading from "../components/heading";
import Cv from "../components/cv/cv";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Cv />
    </div>
  );
};

export default Home;

const Nav = () => {

  const navigate = useNavigate();
  const logout = () => {
    // operate cookie auth and redirect
    // make request to /logout with cookie tokens
    Cookies.remove("tokens")
    navigate("/login")
  }

  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li>
          <h3>Profile</h3>
        </li>
        <li>
            <button onClick={() => logout()}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};
