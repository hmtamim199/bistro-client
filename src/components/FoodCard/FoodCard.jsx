const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute bg-slate-700 right-0 mr-6 mt-6 px-4 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
