import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { AnimatePresence, motion } from "framer-motion";

function Main() {
  return (
    <React.StrictMode>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <App />
        </motion.div>
      </AnimatePresence>
    </React.StrictMode>
  )
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
