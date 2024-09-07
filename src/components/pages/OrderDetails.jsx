import {toast} from "react-toastify";
import CartData from "../utilities/CartData";
import Title from "../utilities/Title";
import {useEffect, useState} from "react";
import useCart from "../../hooks/useCart";

const OrderDetails = () => {
  const {cart, refetch} = useCart();
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartData(cart);
    calculateTotalPrice(cart);
  }, [cart]);

  const calculateTotalPrice = (data) => {
    const total = data.reduce((acc, item) => acc + item.qty * item.recent_price, 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (id, newQty) => {
    const updatedCartData = cartData.map((item) => (item._id === id ? {...item, qty: newQty} : item));
    setCartData(updatedCartData);
    calculateTotalPrice(updatedCartData);
  };

  const handleDeleteItem = (id) => {
    const updatedCartData = cartData.filter((item) => item._id !== id);
    setCartData(updatedCartData);
    calculateTotalPrice(updatedCartData);

    fetch(`https://ibos-server.vercel.app/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast("Item deleted successfully");
        } else {
          toast("Failed to delete item");
        }
      });
  };

  return (
    <>
      <Title title="Order Details" />
      <div className="grid grid-cols-3 gap-6 min-h-[calc(100vh-640px)] m-14">
        <div className="col-span-2">
          <h1 className="text-2xl font-bold mb-5">An overview if your order</h1>
          {cartData?.length > 0 ? (
            cartData.map((item) => <CartData item={item} key={item._id} onQuantityChange={handleQuantityChange} onDelete={handleDeleteItem} />)
          ) : (
            <p className="text-lg font-semibold mb-5 text-red-600">No items in the cart</p>
          )}
        </div>
        <div className="col-span-1 px-14">
          <h1 className="text-2xl font-bold mb-5">Order details</h1>
          <div className="grid grid-cols-2 items-center gap-2 mb-5 p-5 text-[#656565] bg-[#FAFAFA] border-2 rounded-lg border-[#DEDEDE]">
            <span>Subtotal</span> <span className="text-end">€ {totalPrice}.00</span>
            <span>Shipping</span> <span className="text-end">Free</span>
            <span>Estimates Tax ©</span> <span className="text-end">€ -</span>
            <hr className="my-3" />
            <hr className="my-3" />
            <span className="font-bold text-xl">Total</span> <span className="text-end text-xl text-black font-bold">€ {totalPrice}.00</span>
          </div>
          <button onClick={() => toast("Order placed successfully")} disabled={cartData.length === 0} className="btn bg-black text-white w-full">
            GO TO CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
