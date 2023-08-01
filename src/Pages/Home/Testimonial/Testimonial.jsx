import { useEffect, useState } from "react";
import TitleSection from "../../Shared/TitleSection/TitleSection";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    fetch("ratings.json")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);
  return (
    <div>
      <TitleSection
        subHeading={"---What Our Client Say---"}
        heading={"Testimonial"}
      ></TitleSection>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {ratings.map((rating) => (
          <SwiperSlide key={rating._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={rating.rating}
                readOnly
              />
              <h2 className="my-8">{rating.details}</h2>
              <h1>{rating.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
