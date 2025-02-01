import LoadingProgressBar from "@/components/shared/LoadingProgressBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { scrapedPages } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SetupStep2 = () => {
  const [showPages, setShowPages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPages(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="overflow-hidden p-2">
      <LoadingProgressBar />
      <AnimatePresence>
        {showPages && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mt-4 "
          >
            {scrapedPages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center">
                  <motion.div
                    className={`w-2 h-2 rounded-full mr-3 bg-black `}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  />
                  <span>{page.url}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>{page.chunks} chunks</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-gray-200 transition-colors"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default SetupStep2;
