import Activelink from "./Activelink";

const Links = () => {
  return (
    <>
      <li className="text-lg">
        <Activelink to="/">Home</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/cart">Products</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/">Categories</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/">Custom</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/">Blog</Activelink>
      </li>
    </>
  );
};

export default Links;
