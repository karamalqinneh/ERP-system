import Home from "./components/home/mainHomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HR from "./components/HR/HR";
import CRM from "./components/CRM/CRM";
import SCM from "./components/SCM/SCM";
import Sales from "./components/sales/sales";
import LandingPage from "./components/landing-page/landingPageMain";
import LoginProvider from "./components/context/auth/login";
import Auth from "./components/context/auth/auth";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/scm/*" element={<SCM />} />
          <Route path="/hr/*" element={<HR />} />
          <Route path="/crm/*" element={<CRM />} />
          <Route path="/accounting/*" element={<Home />} />
          <Route path="/sales/*" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
