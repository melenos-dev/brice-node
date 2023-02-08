import { useState, useEffect } from "react";
import "../css/pages/home.scss";
import { wrap, motion, AnimatePresence } from "framer-motion";
import Slider from "../components/Slider/index";
import { slides } from "../components/Slider/SlideData";

export default function Home() {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);
  const [arrowDirection, setArrowDirection] = useState(0);
  const slideIndex = wrap(0, slides.length, currentSlide);

  const paginate = (newDirection) => {
    setCurrentSlide([currentSlide + newDirection, newDirection]);
  };

  useEffect(() => {
    arrowDirection === 0
      ? slides.length === currentSlide + 1 && setArrowDirection(1)
      : 0 === currentSlide && setArrowDirection(0);
  }, [currentSlide, arrowDirection]);

  return (
    <motion.div
      className="home page d-flex flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center justify-content-center align-items-center d-flex w-100">
        <Slider
          paginate={paginate}
          currentSlide={currentSlide}
          direction={direction}
          slideIndex={slideIndex}
          slides={slides}
        />
      </div>
      <div id="slider__paginationBottom">
        <div>
          <motion.div
            key="arrows"
            className={"arrow " + (arrowDirection === 0 ? "bottom" : "top")}
            onClick={() => {
              arrowDirection === 0 ? paginate(1) : paginate(-1);
            }}
          ></motion.div>
          <div></div>
        </div>
        <AnimatePresence initial={true}>
          <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: [0, 2, 1] },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <a href="files/humans.txt" className="file">
              &copy; Sb_2K22<span className="end">.txt</span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
