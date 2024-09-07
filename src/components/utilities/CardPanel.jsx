import {useContext} from "react";
import {PiHandbagSimpleBold} from "react-icons/pi";
import {AuthContext} from "../../provider/AuthProvider";
import {toast} from "react-toastify";
import useCart from "../../hooks/useCart";

const CardPanel = ({data}) => {
  const {user} = useContext(AuthContext);
  const {refetch} = useCart();
  const {_id, name, img, recent_price, prev_price, off_price, details} = data;

  const cartHandler = () => {
    if (user && user.email) {
      const cartItm = {
        cartId: _id,
        user: user.email,
        img,
        name,
        recent_price,
        qty: 1,
      };

      fetch("https://ibos-server.vercel.app/addCart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItm),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast("Item Added");
          } else {
            toast("Item Already Added");
          }
        });
    }
  };

  return (
    <>
      <div className="card w-64 border">
        <figure className="px-3 pt-3 ">
          <img src={img} className="rounded-xl " />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title">{name}</h2>
          <p className="flex gap-1 font-bold">
            <span>€{recent_price}.00</span>
            <span className="text-[#ABABAB]">
              <del>€{prev_price}.00</del>
            </span>
            <span className="text-[#B92E2E]">{off_price}% OFF</span>
          </p>
          <p className="text-[#838383] text-sm">{details}</p>
          <div className="card-actions">
            <button onClick={cartHandler} className="btn bg-black text-white w-full">
              <PiHandbagSimpleBold className="text-lg" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPanel;
