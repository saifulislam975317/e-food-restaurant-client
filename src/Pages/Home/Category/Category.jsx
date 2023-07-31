import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import TitleSection from "../../Shared/TitleSection/TitleSection";

const Category = () => {
  return (
    <section>
      <TitleSection
        subHeading={"--- From 11.00 am to 10.00 pm ---"}
        heading={"Order online"}
      ></TitleSection>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="text-center -mt-16 text-white uppercase text-4xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-center -mt-16 text-white uppercase text-4xl">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-center -mt-16 text-white uppercase text-4xl">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-center -mt-16 text-white uppercase text-4xl">
            Deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-center -mt-12 text-white uppercase text-4xl">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
