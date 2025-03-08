import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <h2>this is the menu </h2>
      <Cover img={coverImg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={coverImg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={coverImg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
