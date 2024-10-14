import PropTypes from "prop-types";

// const message = { name: "Victor", age: 28 };
// const getResult = (x, y) => x + y;

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props);

  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <h1>{getResult(5, 5)}</h1> */}
      {/* <code>{JSON.stringify(message)}</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  name: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: "Victor",
  subTitle: "Not subtitle",
  // title: "Not title",
};
