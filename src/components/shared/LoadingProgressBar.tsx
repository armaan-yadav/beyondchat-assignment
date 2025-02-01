import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1500;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      if (newProgress < 100) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-lg font-bold text-gray-600 mb-2"
      >
        Website Scanning Progress {Math.floor(progress)}%
      </motion.div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="h-full bg-black rounded-full"
        />
      </div>
    </div>
  );
};

export default LoadingProgressBar;
