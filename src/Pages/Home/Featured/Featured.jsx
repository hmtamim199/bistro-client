import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white my-10">
      <SectionTitle subHeading="" heading=""></SectionTitle>
      <div className="md:flex justify-center items-center py-20 mx-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-8 py-4">
          <p>aug 23 2025</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            temporibus, repellat placeat, laborum voluptatibus reprehenderit
            culpa non obcaecati inventore adipisci facilis sed tempore eius!
            Facilis itaque perferendis saepe fugit? Nisi atque quisquam
            praesentium sed eligendi, eum dicta aliquid ipsa! Minima!
          </p>
          <button className="btn btn-outline">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
