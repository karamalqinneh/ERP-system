import Home from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/auth/login";
import HR from "./components/HR/HR";
import CRM from "./components/CRM/CRM";
import SCM from "./components/SCM/SCM";
import Sales from "./components/sales/sales";
import LoggedinHeader from "./UI/headers/loggedinHeader";
import LandingPage from "./components/landing-page/landingPageMain";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home/*" element={<LoggedinHeader />} />
          <Route path="/scm/*" element={<SCM />} />
          <Route path="/hr/*" element={<HR />} />
          <Route path="/crm/*" element={<CRM />} />
          <Route path="/accounting/*" element={<Home />} />
          <Route path="/sales/*" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
