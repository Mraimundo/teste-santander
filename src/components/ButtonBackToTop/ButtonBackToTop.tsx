import { ArrowLineUp } from "@phosphor-icons/react";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ButtonBackToTop.module.css";

export function ButtonBackToTop() {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const minScroll = 500;

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > minScroll) setShow(true);
    if (show && window.scrollY <= minScroll) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className={styles.buttonContainer}
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <button onClick={scrollToTop}>
            <ArrowLineUp size={20} />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
