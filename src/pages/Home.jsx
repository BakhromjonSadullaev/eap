import Nav from "../components/Nav/Nav";
import Dropdown from "../components/Dropdown/Dropdown";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import Banner from "../components/Banner/Banner";
import style from "./home.module.scss";

const Home = () => {
  return (
    <div>
      <nav className={style.nav}>
        <Nav />
        <div className={style.line}></div>
        <CategoryBar />
      </nav>

      <section className={style.car_category}>
        <h2>Выберите автомобиль</h2>
        <p>
          Выберите все необходимые параметры, для добавления автомобиля в гараж{" "}
        </p>
        <Dropdown />
      </section>
      <Banner />
    </div>
  );
};

export default Home;
