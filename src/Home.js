import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to home page</h1>
      <Link to="/name" state={{ name: "Manthan", age: 21 }}>
        Name
      </Link>
    </>
  );
}

export default Home;
