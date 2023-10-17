import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./components/sign-in/SignIn";
import SignUpPage from "./components/sign-up/SignUp";
import LandingPage from "./components/landing/Landing";
import ComponentTestPage from "./components/demo/ComponentTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="test" element={<ComponentTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
