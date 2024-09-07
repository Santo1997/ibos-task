import {NavLink} from "react-router-dom";

const Activelink = ({to, children}) => {
  return (
    <NavLink to={to} className={({isActive}) => (isActive ? "btn-ghost btn-md btn-info text-black hover:text-black" : "btn-md hover:text-black")}>
      {children}
    </NavLink>
  );
};

export default Activelink;
