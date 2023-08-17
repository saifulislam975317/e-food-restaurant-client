import useMenu from "../../../hooks/useMenu";
import TitleSection from "../../Shared/TitleSection/TitleSection";
import MenuItems from "./MenuItems/MenuItems";

const PopularItems = () => {
  const [menu] = useMenu();
  const popular = menu.filter((product) => product.category === "popular");

  return (
    <section className="mb-12">
      <div>
        <TitleSection
          heading={"From Our Menu"}
          subHeading={"---Check it out---"}
        ></TitleSection>
      </div>

      <div className="grid md:grid-cols-2 gap-4 ">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
