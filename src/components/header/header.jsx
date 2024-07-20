import s from "./header.module.scss";
import Logo from "./logo/logo";
import Nav from "./nav/nav";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Logo />
        <Nav/>
      </div>
    </header>
  );
};

export default Header;
