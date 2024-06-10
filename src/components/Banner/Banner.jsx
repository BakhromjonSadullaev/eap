import Carousel from "react-bootstrap/Carousel";
import banner from "../../assets/banner.png";

import style from "./banner.module.scss";

import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

const Banner = () => {
  return (
    <div className={style.container}>
      <Carousel
        nextLabel={""}
        prevLabel={""}
        prevIcon={
          <button className={style.prevBtn}>
            <GrFormPrevious />
          </button>
        }
        nextIcon={
          <button className={style.nextBtn}>
            <MdOutlineNavigateNext />
          </button>
        }
        className={style.carousel}
      >
        <Carousel.Item>
          <div className={style.content}>
            <h1 className={style.title}>
              Оригинальные автомасла <br /> cо скидкой <span> 15%</span> ₽{" "}
            </h1>

            <p className={style.info}>Акция действует с 1 по 30 июня 2024</p>
          </div>
          <img src={banner} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
