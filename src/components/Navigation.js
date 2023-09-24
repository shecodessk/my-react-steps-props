import { NavLink } from "react-router-dom";

const Navigation = () => {
  const handleClick = () => {
    window.alert("you click me!");
  };

  return (
    <>
      <NavLink to="/home">Home </NavLink>
      <NavLink to="/about-me">About Me </NavLink>
      <NavLink to="/users/"> User </NavLink>
      <button onClick={handleClick}>Button Clicking</button>
    </>
  );
};

export default Navigation;
