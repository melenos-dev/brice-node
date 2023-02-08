import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Logo/index";

const variants = {
  enter: (direction) => {
    return {
      y: direction > 0 ? "500vh" : "-500vh",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      y: direction < 0 ? "500vh" : "-500vh",
      opacity: 0,
    };
  },
};

function Slider({
  paginate,
  currentSlide,
  direction,
  slideIndex,
  slides,
  controls,
}) {
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <div id="slider">
          <motion.div
            id="slider__Inner"
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 4000, damping: 30 },
              opacity: { duration: 1.5 },
            }}
          >
            {currentSlide === 0 && <Logo />}
            <div
              data-id={currentSlide}
              dangerouslySetInnerHTML={{ __html: slides[slideIndex].html }}
            ></div>
          </motion.div>
        </div>
      </AnimatePresence>
      <div id="slider__paginationRight">
        <div
          className={"arrow " + (0 === slideIndex && "disabled")}
          onClick={() => 0 !== slideIndex && paginate(-1)}
        ></div>
        <div
          className={
            "arrow " + (slides.length === slideIndex + 1 && "disabled")
          }
          onClick={() => slides.length !== slideIndex + 1 && paginate(1)}
        ></div>
        <div id="slider__paginationRight__Steps">
          <motion.span>0{slideIndex + 1}</motion.span>
          <span>/0{slides.length}</span>
        </div>
        <div id="slider__paginationRight__Tips">
          <AnimatePresence>
            {slides.map((current, index) => {
              return (
                <motion.div
                  key={index}
                  className={slideIndex === index ? "active" : ""}
                  onClick={() =>
                    slideIndex !== index && paginate(index - slideIndex)
                  }
                ></motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default Slider;
