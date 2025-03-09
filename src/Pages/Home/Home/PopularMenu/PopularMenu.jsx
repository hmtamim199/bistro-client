import PopularItem from "../../../Shared/PopularItem/PopularItem";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItem = data.filter((item) => item.category === "popular");
  //       setMenu(popularItem);
  //     });
  // }, []);
  return (
    <div>
      <SectionTitle
        subHeading="check it out"
        heading="from our menu"
      ></SectionTitle>
      <div className="grid grid-cols-2 mb-6">
        {popular.map((item) => (
          <PopularItem key={item._id} item={item}></PopularItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
