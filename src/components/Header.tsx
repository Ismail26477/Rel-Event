import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary-foreground"
            aria-label="Menu"
          >
            <Menu size={24} className="text-gold" />
          </button>

          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full gradient-gold flex items-center justify-center">
              <span className="font-heading text-xs font-bold text-primary-foreground">PE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base font-bold text-gold leading-tight">
                Pinnacle Events
              </span>
              <span className="text-[8px] tracking-[2px] text-gold-light font-body italic">
                Our Business is making Memories
              </span>
            </div>
          </Link>

          <a
            href="tel:+919876543210"
            className="p-2 gradient-gold rounded-full"
            aria-label="Call"
          >
            <Phone size={18} className="text-primary-foreground" />
          </a>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 w-72 bg-charcoal z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gold/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
                    <span className="font-heading text-xs font-bold text-primary-foreground">PE</span>
                  </div>
                  <div>
                    <span className="font-heading text-lg font-bold text-gold">
                      Pinnacle Events
                    </span>
                    <p className="text-[8px] tracking-[2px] text-gold-light italic">
                      Our Business is making Memories
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <X size={22} className="text-gold" />
                </button>
              </div>

              <div className="flex-1 py-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-6 py-3.5 font-body text-base tracking-wide transition-colors ${
                        location.pathname === link.path
                          ? "text-gold border-l-2 border-gold bg-gold/5"
                          : "text-secondary-foreground hover:text-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-6 py-5 border-t border-gold/20">
                <a
                  href="tel:+919876543210"
                  className="block w-full text-center py-3 gradient-gold rounded-lg text-primary-foreground font-body font-bold tracking-wide"
                >
                  Call Now
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
