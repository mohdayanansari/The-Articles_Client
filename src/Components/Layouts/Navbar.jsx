import { Link, Router } from "react-router-dom";
import logo from "../../Assets/thelogo.png";
import { UserContext } from "../../App";
import { useContext } from "react";

function BootLink({ linkName, linkURL }) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to={linkURL}>
          {linkName}
        </Link>
      </li>
    </>
  );
}

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <BootLink linkName="About" linkURL="about" />
          <BootLink linkName="Contact" linkURL="contact" />
          <BootLink linkName="Logout" linkURL="logout" />
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <BootLink linkName="About" linkURL="about" />
          <BootLink linkName="Contact" linkURL="contact" />
          <BootLink linkName="Login" linkURL="login" />
          <BootLink linkName="Registration" linkURL="signup" />
        </>
      );
    }
  };

  return (
    <>
      <nav className="fixed z-50 w-full navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="w-44" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="ml-auto navbar-nav">
            <RenderMenu />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
