import style from "./categoryBar.module.scss";
import { TbGridDots } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
const CategoryBar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <button className={style.categoryBtn}>
          <TbGridDots /> Все каталоги{" "}
        </button>

        <button className={style.btn}>Запчасти для ТО</button>
        <button className={style.btn}>Автомасла</button>
        <button className={style.btn}>Оригинальные каталоги</button>
        <button className={style.btn}>Неоригинальные каталоги</button>
        <button className={style.btn}>Жидкости</button>
        <button className={style.btn}>Аксессуары</button>

        <button className={style.cart}>
          <FiShoppingCart />
          Корзина
          <span>5</span>
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;
