import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransitionWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstMount(false);
    }, 10);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={isFirstMount ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 100,
            duration: .05,
          }}
          className="relative w-full h-full"
        >
          <div className="w-full h-full">{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransitionWrapper;
