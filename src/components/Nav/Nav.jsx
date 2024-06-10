import style from "./nav.module.scss";
import { GoSearch } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
const Nav = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.left}>
          <h1 className={style.logo}>EAP LOGO</h1>
          <div className={style.input}>
            <input type="text" placeholder="Введите номер запчасти или VIN" />
            <GoSearch className={style.search} />
          </div>
          <div className={style.location}>
            <CiLocationOn className={style.ic} />
            <p>Ташкент</p>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.phone}>
            <FiPhoneCall className={style.tel} />
            <p>+998 (71) 123-45-67</p>
          </div>
          <div className={style.register}>
            <CiUser className={style.user} />
            <p>Вход / Регистрация</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
