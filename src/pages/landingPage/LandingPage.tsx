import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 bg-gradient-to-r from-blue-200 to-indigo-300">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight"
      >
        Turn your visitors into customers with our chatbot :)
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
      >
        Build stunning digital experiences with simplicity and elegance. Join us
        to transform your business today.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8"
      >
        <Link to={"/setup"}>
          <Button className="px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105">
            Get Started
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default LandingPage;
