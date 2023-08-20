import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItems from "../Home/PopularItems/MenuItems/MenuItems";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline my-4 border-0 border-b-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
