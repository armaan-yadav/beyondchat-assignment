import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import type { StepperRefAttributes } from "primereact/stepper";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { useRef, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import SetupStep1 from "./steps/SetupStep1";
import SetupStep2 from "./steps/SetupStep2";
import SetupStep3 from "./steps/SetupStep3";

import "primereact/resources/themes/lara-light-cyan/theme.css";

const SetupPage = () => {
  const [companyUrl, setCompanyUrl] = useState("");
  const stepperRef = useRef<StepperRefAttributes>(null);

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

  const stepperStyle = {
    root: { width: "100%" },
    container: { maxWidth: "64rem", margin: "0 auto", padding: "1rem" },
  };

  const handleNext = () => {
    stepperRef.current?.nextCallback();
  };

  const handlePrev = () => {
    stepperRef.current?.prevCallback();
  };

  return (
    <div className="relative  max-w-full py-4 bg-gradient-to-r from-blue-200 to-indigo-300 min-h-[calc(100vh-66px)]">
      <div className="lg:mx-auto lg:max-w-4xl">
        <Stepper ref={stepperRef} pt={stepperStyle}>
          <StepperPanel
            header="Organization Setup"
            pt={{
              content: { className: "py-4" },
              header: { className: "text-[12px] lg:text-lg font-semibold" },
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="step1"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full"
              >
                <div className="mb-6">
                  <SetupStep1
                    companyUrl={companyUrl}
                    setCompanyUrl={setCompanyUrl}
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button
                    className="flex items-center gap-2"
                    onClick={handleNext}
                  >
                    Next
                    <MdNavigateNext />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </StepperPanel>

          <StepperPanel
            header="Chatbot Configuration"
            pt={{
              content: { className: "py-4" },
              header: { className: "text-[12px] lg:text-lg font-semibold" },
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="step2"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full"
              >
                <div className="mb-6">
                  <SetupStep2 />
                </div>
                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-white"
                    onClick={handlePrev}
                  >
                    <MdNavigateBefore />
                    Back
                  </Button>
                  <Button
                    className="flex items-center gap-2"
                    onClick={handleNext}
                  >
                    Next
                    <MdNavigateNext />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </StepperPanel>

          <StepperPanel
            header="Integration"
            pt={{
              content: { className: "py-4" },
              header: { className: "text-[12px] lg:text-lg font-semibold" },
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="step3"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full"
              >
                <div className="mb-6">
                  <SetupStep3 />
                </div>
                <div className="flex justify-start pt-4">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={handlePrev}
                  >
                    <MdNavigateBefore />
                    Back
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </StepperPanel>
        </Stepper>
      </div>
    </div>
  );
};

export default SetupPage;
