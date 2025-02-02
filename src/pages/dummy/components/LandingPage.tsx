import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <nav className="w-full py-4 px-4 md:px-8 bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-blue-600">LocalBiz</div>
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="home" className="pt-24 md:pt-32 px-4 md:px-8 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              This is how your website will look like with our ChatBot
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              A Dummy client webiste
            </p>

            <Link to={"/admin"}>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded with a passion for supporting local businesses, we
              understand the unique challenges you face. Our mission is to
              provide simple, effective solutions that help your business grow
              and prosper in your community.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Consulting",
                description:
                  "Strategic guidance to help your business grow and succeed in the local market.",
              },
              {
                title: "Digital Marketing",
                description:
                  "Targeted local marketing strategies to reach and engage your community.",
              },
              {
                title: "Business Analytics",
                description:
                  "Data-driven insights to make informed decisions for your business growth.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to take your local business to the next level? We're here to
            help you succeed.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      <footer className="py-8 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center text-gray-600 text-sm">
          <p>&copy; 2025 LocalBiz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
