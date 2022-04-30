import Home from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/auth/login";
import HR from "./components/HR/HR";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/scm/*" element={<Home />} />
          <Route path="/hr/*" element={<HR />} />
          <Route path="/crm/*" element={<Home />} />
          <Route path="/accounting/*" element={<Home />} />
          <Route path="/payments/*" element={<Home />} />
          <Route path="/tracking/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
