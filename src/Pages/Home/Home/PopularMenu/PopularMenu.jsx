import { useEffect, useState } from "react";
import PopularItem from "../../../Shared/PopularItem/PopularItem";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="check it out"
        heading="from our menu"
      ></SectionTitle>
      <div className="grid grid-cols-2 mb-6">
        {menu.map((item) => (
          <PopularItem key={item._id} item={item}></PopularItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
