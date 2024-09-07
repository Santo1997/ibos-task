import {Helmet} from "react-helmet-async";

const Title = ({title}) => {
  return (
    <Helmet>
      <title>E-commerce WebApp | {title}</title>
    </Helmet>
  );
};

export default Title;
