import {useContext, useEffect, useRef} from "react";
import {AuthContext} from "../provider/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";
import {toast} from "react-toastify";

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const loaction = useLocation();
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (!user && !toastShownRef.current) {
      toast.error("You have to log in first");
      toastShownRef.current = true;
    }
  }, [user]);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: loaction}} replace></Navigate>;
};

export default PrivateRoutes;
