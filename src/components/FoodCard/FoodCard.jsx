import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user.email) {
      // todo:
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } else {
      Swal.fire({
        title: "you are not logged in",
        text: "please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute bg-slate-700 right-0 mr-6 mt-6 px-4 text-white">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary"
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
