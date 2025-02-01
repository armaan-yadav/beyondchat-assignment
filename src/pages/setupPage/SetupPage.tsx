import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Steps } from "primereact/steps";
import { scrapedPages, setupItems } from "@/data";
import SetupStep1 from "./steps/SetupStep1";
import SetupStep2 from "./steps/SetupStep2";
import { motion, AnimatePresence } from "framer-motion";
import SetupStep3 from "./steps/SetupStep3";

const SetupPage = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  const renderStep1 = () => <SetupStep1 />;
  const renderStep2 = () => <SetupStep2 />;
  const renderStep3 = () => <SetupStep3 />;

  const steps = [renderStep1(), renderStep2(), renderStep3()];

  return (
    <div className="relative overflow-hidden max-w-full">
      <div className="container mx-auto px-4">
        <Steps
          model={setupItems}
          activeIndex={activeIndex}
          onSelect={(e) => setActiveIndex(e.index)}
          className="custom-steps mb-4"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full"
          >
            {steps[activeIndex]}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-end gap-4 mt-4">
          {activeIndex > 0 && (
            <Button
              onClick={() => setActiveIndex((prev) => prev - 1)}
              disabled={activeIndex === 0}
              className=" transition-colors px-5 py-2 border rounded-md"
            >
              Back
            </Button>
          )}

          {activeIndex < 2 && (
            <Button
              onClick={() => setActiveIndex((prev) => prev + 1)}
              className="  transition-colors px-5 py-2 rounded-md"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SetupPage;
