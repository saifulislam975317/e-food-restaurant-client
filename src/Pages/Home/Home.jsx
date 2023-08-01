import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularItems from "./PopularItems/PopularItems";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularItems></PopularItems>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
