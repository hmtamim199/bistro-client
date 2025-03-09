import Cover from "../../Shared/Cover/Cover";
import PopularItem from "../../Shared/PopularItem/PopularItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover title={title} img={img}></Cover>}
      <div className="grid grid-cols-2 mb-6">
        {items.map((item) => (
          <PopularItem key={item._id} item={item}></PopularItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
