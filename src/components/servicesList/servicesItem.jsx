import { useNavigate } from "react-router-dom";
import s from "./servicesList.module.scss";

const ServicesItem = ({ name, url }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services" + url);
  };
  return (
    <li className={s.list_item}>
      <button onClick={handleClick} className={s.list_item_btn}>
        <p className={s.list_item_link}>
          {name}
        </p>
      </button>
    </li>
  );
};

export default ServicesItem;
