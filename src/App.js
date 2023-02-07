import Menu from "./components/Menu.js";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoader(false), 500);
  }, []);
  return (
    <AnimatePresence>
      {loader ? (
        <Loader key="loader" />
      ) : (
        <>
          <header className="text-center">
            <Menu />
          </header>
          <motion.main
            className="container-fluid d-flex justify-content-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0 }}
            variants={{
              visible: { backgroundPosition: "0% 100%" },
              hidden: { backgroundPosition: "-50% 100%" },
            }}
          >
            <div className="page">
              <div>
                <motion.div
                  id="comet"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 2.5,
                    delay: 0,
                    ease: "backInOut",
                  }}
                  variants={{
                    visible: {
                      left: ["0%", "100%"],
                      bottom: ["0%", "100%"],
                      rotate: ["0", "75"],
                    },
                    hidden: { bottom: 0, left: 0 },
                  }}
                ></motion.div>
              </div>
            </div>
            <AnimatedRoutes />
          </motion.main>
          {window.location.pathname !== "/" && <Footer />}
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
