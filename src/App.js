import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Name from "./Name";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/home" component={<Home />} />
          <Route path="/name" component={<Name />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
