import { createPortal } from "react-dom";
import { motion } from "framer-motion";
export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: 30 },
        }}
        initial="closed"
        animate="open"
        exit="closed"
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
