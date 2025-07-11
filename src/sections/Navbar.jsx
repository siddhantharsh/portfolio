import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation({ onClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={onClick}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={onClick}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#projects" onClick={onClick}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#achievements" onClick={onClick}>
          Achievements
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={onClick}>
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Siddhant
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-7 h-7"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {/* Fullscreen overlay for mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 sm:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white focus:outline-none"
              aria-label="Close navigation"
            >
              <img src="assets/close.svg" className="w-8 h-8" alt="close" />
            </button>
            <nav className="flex flex-col items-center gap-8">
              <Navigation onClick={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
