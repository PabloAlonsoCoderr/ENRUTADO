import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="ul">
        <Link to="/">
          <li>HOME</li>
        </Link>
        <NavLink
          to="/product_card"
          className={({ isActive }) => (isActive ? "btn_active" : "btn")}
        >
          <li>NAV LINK</li>
        </NavLink>
        <li>VISTA</li>
      </ul>
    </div>
  );
};

export default Nav;
