import s from "./nav.module.scss";
import { NavLink } from "react-router-dom";

const NavItem = ({ text, url }) => {
  return (
    <li className={s.nav_list_item}>
      <NavLink to={url} className={s.link}>{text}</NavLink>
    </li>
  );
};

export default NavItem;
