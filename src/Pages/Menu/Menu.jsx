import { Helmet } from "react-helmet-async";
import menuBg from "../../assets/menu/banner3.jpg";
import Cover from "../Cover/Cover";
import PopularItems from "../Home/PopularItems/PopularItems";

import { Parallax } from "react-parallax";

const Menu = () => {
  <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={menuBg}
    bgImageAlt="the menu"
    strength={-200}
  >
    Blur transition from min to max
    <div style={{ height: "200px" }} />
  </Parallax>;
  return (
    <div>
      <Helmet>
        <title>E-Restaurant | Menu</title>
      </Helmet>
      <Cover img={menuBg} title={"Our Menu"}></Cover>

      <PopularItems></PopularItems>
    </div>
  );
};

export default Menu;
