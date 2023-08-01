import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularItems from "./PopularItems/PopularItems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularItems></PopularItems>
      <Featured></Featured>
    </div>
  );
};

export default Home;
