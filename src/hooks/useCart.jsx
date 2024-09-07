import {useContext} from "react";
import {AuthContext} from "../provider/AuthProvider";
import {useQuery} from "@tanstack/react-query";

const useCart = () => {
  const {user, loading} = useContext(AuthContext);

  const {refetch, data: cart = []} = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: () => fetch("https://ibos-server.vercel.app/carts").then((res) => res.json()),
  });

  return {cart, refetch};
};

export default useCart;
