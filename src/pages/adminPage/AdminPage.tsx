import { useState } from "react";

const AdminPanel = () => {
  const webpages = [
    { title: "Home Page", status: "Scraped", date: "2025-02-01" },
    { title: "About Us", status: "Pending", date: "2025-02-02" },
    { title: "Contact Us", status: "Scraped", date: "2025-02-03" },
    { title: "Services", status: "Pending", date: "2025-02-04" },
  ];

  const chatbotSettings = {
    botName: "BeyondBot",
    status: "Active",
    lastTrained: "2025-01-30",
  };

  const [trainingStatus, setTrainingStatus] = useState("Training Pending");

  const handleStartTraining = () => {
    setTrainingStatus("Training In Progress...");
    setTimeout(() => {
      setTrainingStatus("Training Complete");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col text-white">
      <div className="flex flex-1 justify-center items-center p-6">
        <div className="w-full md:w-3/4 lg:w-2/3 bg-white text-black shadow-lg rounded-lg">
          <div className="p-6">
            <h2 className="text-2xl mb-6 font-light">Chatbot Management</h2>

            <div className="bg-white p-4 rounded mb-6 border border-gray-300">
              <h3 className="text-lg font-semibold">Chatbot Settings</h3>
              <p>
                <strong>Bot Name:</strong> {chatbotSettings.botName}
              </p>
              <p>
                <strong>Status:</strong> {chatbotSettings.status}
              </p>
              <p>
                <strong>Last Trained:</strong> {chatbotSettings.lastTrained}
              </p>
            </div>

            <div className="bg-white p-4 rounded mb-6 border border-gray-300">
              <h3 className="text-lg font-semibold">Webpages Detected</h3>
              <ul className="space-y-2">
                {webpages.map((page, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{page.title}</span>
                    <span
                      className={`text-sm ${
                        page.status === "Scraped"
                          ? "text-green-600"
                          : "text-gray-400"
                      }`}
                    >
                      {page.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded mb-6 border border-gray-300">
              <h3 className="text-lg font-semibold">Training Status</h3>
              <p>{trainingStatus}</p>
              <button
                onClick={handleStartTraining}
                className="bg-black text-white p-2 rounded mt-4 w-full hover:bg-gray-800"
              >
                Start Chatbot Training
              </button>
            </div>

            <div className="bg-white p-4 rounded mb-6 border border-gray-300">
              <h3 className="text-lg font-semibold">Chatbot Integration</h3>
              <button className="bg-white text-black p-2 rounded mt-2 w-full mb-2 border border-gray-300 hover:bg-gray-100">
                Test Chatbot
              </button>
              <button className="bg-white text-black p-2 rounded mt-2 w-full mb-2 border border-gray-300 hover:bg-gray-100">
                Integrate Chatbot on Your Website
              </button>
              <button className="bg-white text-black p-2 rounded mt-2 w-full mb-2 border border-gray-300 hover:bg-gray-100">
                Mail Integration Instructions
              </button>
            </div>

            <div className="bg-white p-4 rounded mb-6 border border-gray-300">
              <h3 className="text-lg font-semibold">Integration Status</h3>
              <p className="text-green-600">Integration Successful!</p>
              <button className="bg-black text-white p-2 rounded mt-4 w-full hover:bg-gray-800">
                Explore Admin Panel
              </button>
              <button className="bg-black text-white p-2 rounded mt-4 w-full hover:bg-gray-800">
                Start Talking to Your Chatbot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
