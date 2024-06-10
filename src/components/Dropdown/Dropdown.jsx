import style from "./Dropdown.module.scss";
import { IoCaretDownCircleOutline } from "react-icons/io5";

const Dropdown = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.dropdown}>
          <div className={style.mtab}>
            <p className={`${style.pr} ${style.active}`}>
              Выберите марку <IoCaretDownCircleOutline className={style.ic} />
            </p>
            <p className={style.pr}>
              Выберите модель <IoCaretDownCircleOutline className={style.ic} />
            </p>
            <p className={style.pr}>
              Год <IoCaretDownCircleOutline className={style.ic} />
            </p>
          </div>
          <table className={style.table}>
            <tr>
              <td>Acura</td>
              <td>Alfa Romeo</td>
              <td>Audi</td>
              <td>Bentley</td>
              <td>BMW</td>
              <td>Cadillac</td>
              <td>Chery</td>
              <td>Chevrolet</td>
              <td>Chrysler</td>
              <td>Citreon</td>
            </tr>
            <tr>
              <td>Acura</td>
              <td>Alfa Romeo</td>
              <td>Audi</td>
              <td>Bentley</td>
              <td>BMW</td>
              <td>Cadillac</td>
              <td>Chery</td>
              <td>Chevrolet</td>
              <td>Chrysler</td>
              <td>Citreon</td>
            </tr>
            <tr>
              <td>Acura</td>
              <td>Alfa Romeo</td>
              <td>Audi</td>
              <td>Bentley</td>
              <td>BMW</td>
              <td>Cadillac</td>
              <td>Chery</td>
              <td>Chevrolet</td>
              <td>Chrysler</td>
              <td>Citreon</td>
            </tr>
            <tr>
              <td>Acura</td>
              <td>Alfa Romeo</td>
              <td>Audi</td>
              <td>Bentley</td>
              <td>BMW</td>
              <td>Cadillac</td>
              <td>Chery</td>
              <td>Chevrolet</td>
              <td>Chrysler</td>
              <td>Citreon</td>
            </tr>
            <tr>
              <td>Acura</td>
              <td>Alfa Romeo</td>
              <td>Audi</td>
              <td>Bentley</td>
              <td>BMW</td>
              <td>Cadillac</td>
              <td>Chery</td>
              <td>Chevrolet</td>
              <td>Chrysler</td>
              <td>Citreon</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
