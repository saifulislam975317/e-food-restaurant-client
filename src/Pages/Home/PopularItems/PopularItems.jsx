import { useEffect, useState } from "react";
import TitleSection from "../../Shared/TitleSection/TitleSection";
import MenuItems from "./MenuItems/MenuItems";

const PopularItems = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const products = data.filter((item) => item.category === "popular");
        setMenu(products);
      });
  }, []);
  return (
    <section className="mb-12">
      <div>
        <TitleSection
          heading={"Check It out"}
          subHeading={"---From Our Menu---"}
        ></TitleSection>
      </div>

      <div className="grid md:grid-cols-2 gap-4 ">
        {menu.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
