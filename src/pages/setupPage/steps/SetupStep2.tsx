import LoadingProgressBar from "@/components/shared/LoadingProgressBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Context } from "@/context";
import { scrapedPages } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface Props {
  next: () => void;
  back: () => void;
}

const SetupStep2 = (props: Props) => {
  const [showPages, setShowPages] = useState(false);

  const { companyDetails } = useContext(Context);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPages(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="overflow-hidden p-2">
      {companyDetails && (
        <div className="flex items-center justify-start gap-2 my-1">
          <img
            src={companyDetails.favicon}
            alt="favicon"
            className="rounded-full overflow-hidden h-[30px]"
          />
          <h1 className="text-xl font-bold text-gray-600">
            {companyDetails.sitename}
          </h1>
        </div>
      )}
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
                    className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-blue-400 to-indigo-600 `}
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
                    className="hover:bg-gray-200 transition-colors text-white"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-white"
            onClick={props.back}
          >
            <MdNavigateBefore />
            Back
          </Button>
          <Button className="flex items-center gap-2" onClick={props.next}>
            Next
            <MdNavigateNext />
          </Button>
        </div>
      </AnimatePresence>
    </Card>
  );
};

export default SetupStep2;
