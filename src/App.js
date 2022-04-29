import Home from "./components/home/home";
import InnerHeader from "./UI/headers/inner-headers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/auth/auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <InnerHeader></InnerHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/*" element={<Signin />} />
          <Route path="/scm/*" element={<Home />} />
          <Route path="/hr/*" element={<Home />} />
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
