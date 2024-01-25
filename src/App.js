import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Name from "./Name";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/name" element={<Name />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
