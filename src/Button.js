import { useState } from "react";

const Button = (props) => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>
        {props.name} : {count} votes
      </button>
    </>
  );
};

export default Button;
