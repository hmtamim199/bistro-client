const PopularItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className=" flex p-2 space-x-4 ">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px]"
        src={image}
        alt=""
      />
      <div>
        <h2 className="uppercase">{name}</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default PopularItem;
