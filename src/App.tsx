import { Route, Routes } from "react-router";
import { Toaster } from "./components/ui/toaster";
import MainLayout from "./pages/_layout/MainLayout";
import AdminPage from "./pages/adminPage/AdminPage";
import ChatbotPage from "./pages/chatbotPage/ChatbotPage";
import DummyWebsite from "./pages/dummy/DummyWebiste";
import FailurePage from "./pages/failurePage/FailurePage";
import LandingPage from "./pages/landingPage/LandingPage";
import SetupPage from "./pages/setupPage/SetupPage";
import SigninPage from "./pages/signinPage/SigninPage";
import SignupPage from "./pages/signupPage/SignupPage";
import SuccessPage from "./pages/successPage/SuccessPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import AiChatbotPage from "./pages/aiChatbotPage/aiChatbotPage";
import FeedbackPage from "./pages/feedbackPage/FeedbackPage";
import { useContext, useEffect } from "react";
import { authServices } from "./services/authServices";
import { Context } from "./context";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import PageTransitionWrapper from "./components/shared/PageTransitionWrapper";

function App() {
  const { setEmail, isLoading, setIsLoading } = useContext(Context);
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    setIsLoading(true);
    const a = await authServices.getCurrentUser();
    if (a) {
      setEmail(a.email);
    } else {
      setEmail(null);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/failure" element={<FailurePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/ai-bot" element={<AiChatbotPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route path="/dummy" element={<DummyWebsite />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
