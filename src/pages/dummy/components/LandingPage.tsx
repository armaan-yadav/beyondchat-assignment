import { motion } from "framer-motion";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-gray-200 min-h-screen flex flex-col items-center font-sans">
      <motion.nav
        className="w-full py-6 bg-gray-800 shadow-lg fixed top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto flex justify-between items-center px-8">
          <div className="text-3xl font-semibold text-teal-400">LocalBiz</div>
          <ul className="space-x-8 text-lg font-medium">
            <li>
              <a href="#home" className="hover:text-teal-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-teal-300 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>

      <motion.section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?business')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="z-10 text-center text-white px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-300 mb-4">
            Welcome to LocalBiz
          </h1>
          <p className="text-lg sm:text-2xl mb-8 opacity-80">
            A Dummy client website :)
          </p>
          <motion.button
            className="px-8 py-3 bg-teal-500 text-white rounded-full text-lg transform transition duration-300 hover:scale-105 hover:bg-teal-400"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={"/"}>Go Back</Link>
          </motion.button>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="py-20 text-center bg-gray-800 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-teal-400 mb-6">About Us</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 text-gray-300">
          We are committed to providing reliable and efficient local services
          that help you grow. Let us handle the complexities so you can focus on
          what you do best.
        </p>
        <motion.button
          className="px-8 py-3 bg-teal-600 text-white rounded-full text-lg hover:bg-teal-500 transition"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={"/"}>Go Back</Link>
        </motion.button>
      </motion.section>

      <motion.section
        id="services"
        className="py-20 w-full bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-teal-400 text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          <motion.div
            className="bg-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-teal-200 mb-4">
              Service 1
            </h3>
            <p className="text-gray-200 mb-4">
              Offering a range of personalized services designed to fit your
              business needs.
            </p>
            <motion.button
              className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={"/"}>Go Back</Link>
            </motion.button>
          </motion.div>

          <motion.div
            className="bg-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-teal-200 mb-4">
              Service 2
            </h3>
            <p className="text-gray-200 mb-4">
              We ensure that all your requirements are met with precision and
              care.
            </p>
            <motion.button
              className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={"/"}>Go Back</Link>
            </motion.button>
          </motion.div>

          <motion.div
            className="bg-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-teal-200 mb-4">
              Service 3
            </h3>
            <p className="text-gray-200 mb-4">
              We specialize in delivering high-quality, reliable local services
              for your business.
            </p>
            <motion.button
              className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={"/"}>Go Back</Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="py-20 text-center bg-gray-900 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-teal-400 mb-8">
          Contact Us
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
          We’d love to hear from you! Reach out with any questions, feedback, or
          inquiries, and our team will assist you promptly.
        </p>
        <motion.button
          className="px-8 py-3 bg-teal-600 text-white rounded-full text-lg hover:bg-teal-500 transition"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.button>
      </motion.section>

      <footer className="w-full py-6 bg-gray-800 text-center text-teal-400">
        <p>&copy; 2025 LocalBiz. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
