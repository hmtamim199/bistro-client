import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed  my-10">
      <SectionTitle subHeading="" heading=""></SectionTitle>
      <div className="md:flex justify-center items-center py-20 mx-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-8 py-4">
          <p>aug 23 2025</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            this is our most featured item in this beautyifull resturant , you
            can choose out most delisiuos food and you should try it, becouse
            our best shef coock this meal, you can try this ffod from our menu.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
