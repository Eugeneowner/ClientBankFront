import { Link } from "react-router-dom";

import bannerImg from "./banner.jpg";
import s from "./banner.module.scss";

const Banner = () => {
  return (
    <section className={s.banner}>
      <img className={s.banner_img} src={bannerImg} alt="banner" />
      <div className={s.banner_content}>
        <h2 className={s.banner_content_title}>Personal Bank</h2>
        <p className={s.banner_content_description}>
          Bank can support your financial needs around the world
        </p>
        <Link to="/about-us" type="button" className={s.banner_content_btn}>
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default Banner;
