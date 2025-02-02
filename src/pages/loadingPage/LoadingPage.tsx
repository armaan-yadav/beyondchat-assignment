import { motion } from "framer-motion";
import { FallingLines } from "react-loader-spinner";

const LoadingPage = () => {
  const quotes = [
    "🚀 Boost customer engagement with instant responses!",
    "💬 24/7 support—because your customers never sleep!",
    "🤖 Automate FAQs and save valuable time!",
    "📈 Convert visitors into customers with smart interactions!",
    "⚡ Speed up response times and improve satisfaction!",
    "🔍 Guide users to the right product in seconds!",
    "🛠 Reduce workload—let the chatbot handle routine queries!",
    "🌍 Expand your reach with multilingual support!",
    "🎯 Personalize user experiences with AI-powered conversations!",
    "💰 Cut costs while enhancing customer service!",
    "🔗 Seamlessly integrate with your CRM and workflows!",
    "📊 Get insights into customer behavior and trends!",
    "👋 Never miss a lead—chatbots capture inquiries instantly!",
    "🚀 Improve website UX with interactive assistance!",
    "🔄 Keep users engaged and reduce bounce rates!",
  ];

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col bg-white/70">
      <motion.p
        className="font-semibold text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        Why our chatbot?
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <FallingLines visible={true} height="50" width="50" color="#a5b4fc" />
      </motion.div>

      <motion.p
        className="text-center mt-4 text-gray-700 px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {getRandomQuote()}
      </motion.p>
    </div>
  );
};

export default LoadingPage;
