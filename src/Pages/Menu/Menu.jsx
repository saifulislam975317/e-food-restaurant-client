import { Helmet } from "react-helmet-async";
import menuBg from "../../assets/menu/banner3.jpg";
import desertsImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import Cover from "../Cover/Cover";

import { Parallax } from "react-parallax";
import TitleSection from "../Shared/TitleSection/TitleSection";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../MenuCatagory/MenuCategory";

const Menu = () => {
  <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={menuBg}
    bgImageAlt="the menu"
    strength={-200}
  >
    <div style={{ height: "200px" }} />
  </Parallax>;
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>E-Restaurant | Menu</title>
      </Helmet>
      <Cover img={menuBg} title={"Our Menu"}></Cover>
      <TitleSection
        subHeading={"Don't miss"}
        heading={"Today's offer"}
      ></TitleSection>
      <MenuCategory items={offered} title={"offered"}></MenuCategory>
      <MenuCategory
        items={dessert}
        img={desertsImg}
        title={"dessert"}
      ></MenuCategory>

      <MenuCategory items={pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
      <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title={"soup"}></MenuCategory>
    </div>
  );
};

export default Menu;
