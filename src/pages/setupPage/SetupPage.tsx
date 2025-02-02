// @ts-nocheck
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
    <div className="card flex justify-content-center  w-full">
      <div className="w-full">
        <Stepper ref={stepperRef} linear pt={stepperStyle}>
          <StepperPanel header="Header I">
            <SetupStep1
              next={handleNext}
              companyUrl={companyUrl}
              setCompanyUrl={setCompanyUrl}
            />
          </StepperPanel>
          <StepperPanel header="Header II">
            <SetupStep2 back={handlePrev} next={handleNext} />
          </StepperPanel>
          <StepperPanel header="Header III">
            <SetupStep3 back={handlePrev} />
          </StepperPanel>
        </Stepper>
      </div>
    </div>
  );
};

export default SetupPage;
