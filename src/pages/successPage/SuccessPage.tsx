import SocialMediaShare from "@/components/shared/SocialMediaShare";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { LayoutDashboard, MessageSquare, RocketIcon } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";

const SuccessPage = () => {
  useEffect(() => {
    triggerConfetti();
  }, []);

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center space-y-8 p-8 rounded-2xl bg-white shadow-lg"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex justify-center">
            <RocketIcon className="w-16 h-16 text-blue-500 animate-bounce" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Yayyyy, Chatbot Added!
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Your chatbot is live and ready to turn visitors into happy
            customers!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link to={"/admin"}>
            <Button
              size="lg"
              className="w-full md:w-auto group transform transition-all duration-200 hover:scale-105"
            >
              <LayoutDashboard className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Explore Admin Panel
            </Button>
          </Link>

          <Link to={"/chatbot"}>
            <Button
              size="lg"
              variant="secondary"
              className="w-full md:w-auto group transform transition-all duration-200 hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Start talking to your chatbot
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="pt-6"
        >
          <p className="text-gray-600 mb-4">Share your success!</p>
          <SocialMediaShare />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
