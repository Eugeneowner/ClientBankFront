import s from "./nav.module.scss";
import NavItem from "./navItem";

const Nav = () => {
  const list = [
    {
      text: "home",
      url: "/",
    },
    {
      text: "Services",
      url: "/services",
    },
    {
      text: "about us",
      url: "/about-us",
    },
    {
      text: "contacts",
      url: "/contacts",
    },
  ];
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        {list.map((item) => (
          <NavItem key={item.text} text={item.text} url={item.url}/>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
