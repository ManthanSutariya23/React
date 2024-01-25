import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Name from "./Name";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/name" element={<Name />} />
        </Routes>
      </Router>
      <>iysdhjf</>
    </>
  );
}

export default App;
