import { motion } from "framer-motion";

export default function Backdrop({ children }) {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
