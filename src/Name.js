import { useLocation } from "react-router-dom";

function Name() {
  const data = useLocation().state;
  return (
    <>
      <h1>Name: {data.name}</h1>
      <h1>Age: {data.age}</h1>
    </>
  );
}

export default Name;
