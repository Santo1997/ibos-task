import {useState} from "react";
import {FiMinus} from "react-icons/fi";
import {IoMdAdd} from "react-icons/io";
import {RxCross1} from "react-icons/rx";

const CartData = ({item, onQuantityChange, onDelete}) => {
  const {_id, name, img, qty, recent_price} = item;
  const [newQty, setNewQty] = useState(qty);

  const handleQuantityChange = (newQuantity) => {
    setNewQty(newQuantity);
    onQuantityChange(_id, newQuantity);

    fetch(`https://ibos-server.vercel.app/carts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({qty: newQuantity}),
    });
  };

  return (
    <div>
      <div className="flex items-center gap-2 p-5 text-[#656565] bg-[#FAFAFA] border-b relative ">
        <p className="flex items-center gap-1 p-2 border-2 border-[#DEDEDE] rounded-lg">
          <button onClick={() => handleQuantityChange(newQty - 1 <= 1 ? 1 : newQty - 1)}>
            <FiMinus />
          </button>
          <span className="font-bold text-black">{newQty}</span>
          <button onClick={() => handleQuantityChange(newQty + 1)}>
            <IoMdAdd />
          </button>
        </p>

        <img src={img} className="w-20" />
        <p className="text-black font-bold h-14">{name}</p>

        <div className="grid items-center gap-2 absolute top-0 right-5 bottom-0">
          <button onClick={() => onDelete(_id)} className="text-xl relative">
            <RxCross1 className="absolute -top-2 right-0" />
          </button>
          <span className="text-xl text-black font-bold">€ {newQty * recent_price}.00</span>
        </div>
      </div>
    </div>
  );
};

export default CartData;
