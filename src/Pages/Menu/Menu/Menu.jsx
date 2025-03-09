import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <h2>this is the menu </h2>
      <Cover img={coverImg} title="our menu"></Cover>
      <SectionTitle
        subHeading="don't miss out "
        heading="today's offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert */}
      <MenuCategory
        items={dessert}
        img={dessertImg}
        title="dessert"
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory items={pizza} img={pizzaImg} title="pizza"></MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} img={soupImg} title="soup"></MenuCategory>
      {/* salas menu items */}
      <MenuCategory items={salad} img={saladImg} title="salad"></MenuCategory>
    </div>
  );
};

export default Menu;
