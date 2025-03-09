import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import PopularItem from "../../Shared/PopularItem/PopularItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="mb-6">
      {title && <Cover title={title} img={img}></Cover>}
      <div className="grid grid-cols-2 mb-6">
        {items.map((item) => (
          <PopularItem key={item._id} item={item}></PopularItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
