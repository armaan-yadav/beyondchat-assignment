import { Route, Routes } from "react-router";
import LandingPage from "./pages/landingPage/LandingPage";
import SigninPage from "./pages/signinPage/SigninPage";
import SignupPage from "./pages/signupPage/SignupPage";
import SetupPage from "./pages/setupPage/SetupPage";
import FailurePage from "./pages/failurePage/FailurePage";
import SuccessPage from "./pages/successPage/SuccessPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
