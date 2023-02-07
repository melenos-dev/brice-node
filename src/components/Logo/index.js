import logoPath from "../../img/logo/sb.png";
import { motion, AnimatePresence } from "framer-motion";

const path1 = {
  animate: {
    rotate: [0, 360, 0],
    pathLength: [0, 1.2, 0],
    opacity: [0, 1, 0],
    transition: {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
    },
  },
  exit: { opacity: 0, pathLength: 0 },
};

const path2 = {
  animate: {
    rotate: [0, 360, 0],
    scale: [1, 0.7, 1],
    transition: {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
    },
  },
};

const path3 = {
  animate: {
    scale: [1, 0.8, 1],
    transition: {
      ease: "easeInOut",
      duration: 2,
      delay: 1,
      repeat: Infinity,
    },
  },
};

function Logo() {
  return (
    <AnimatePresence initial={true}>
      <div id="container-logo">
        <a href="https://seraphinbrice.fr" id="logo" className="shake-little">
          <img src={logoPath} alt="Séraphin Brice" />
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          fill="none"
          viewBox="0 0 200 200"
        >
          <defs>
            <linearGradient id="purple" gradientTransform="rotate(0)">
              <stop offset="0%" stopColor="#3f69b2" />
              <stop offset="100" stopColor="#5356a5" />
            </linearGradient>
          </defs>
          <motion.path
            variants={path1}
            animate="animate"
            id="_3"
            data-name="3"
            stroke="#5356a5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3px"
            className="cls-1"
            d="M176.176,44.511A182.577,182.577,0,0,0,155.49,23.826S126.54,0.007,100,.007,44.513,23.829,44.513,23.829A182.615,182.615,0,0,0,23.829,44.513S0.012,73.459.012,100s23.814,55.487,23.814,55.487a182.655,182.655,0,0,0,20.68,20.689S73.457,200,100,200s55.5-23.829,55.5-23.829a182.48,182.48,0,0,0,20.682-20.686S200,126.537,200,100,176.176,44.511,176.176,44.511Zm-2.7,108.269a182.562,182.562,0,0,1-20.684"
          />
          <motion.path
            id="_2"
            data-name="2"
            className="cls-2"
            fill="url('#purple')"
            variants={path2}
            initial="initial"
            animate="animate"
            d="M100,12c-47.945-.467-88,39-88,88a88,88,0,0,0,176,0C188,51.4,148.572,12.475,100,12Zm54.846,142.827C141.355,171.529,121.769,182,100,182s-41.287-10.471-54.777-27.175C28.537,141.325,18,121.775,18,100S28.539,58.651,45.227,45.156C58.716,28.457,78.24,18,100,18s41.349,10.457,54.839,27.152C171.528,58.65,182,78.226,182,100S171.531,141.328,154.846,154.827Z"
          />
          <motion.path
            id="_1"
            data-name="1"
            className="cls-3"
            fill="url('#purple')"
            variants={path3}
            initial="initial"
            animate="animate"
            d="M100,28c18.615,0,37.027,14.938,37.21,15.09a175.533,175.533,0,0,1,19.837,19.959C157.2,63.237,172,81.267,172,100s-14.8,37.774-14.948,37.96a174.967,174.967,0,0,1-19.832,19.964C137.036,158.076,118.666,172,100,172c-18.615,0-37.031-13.924-37.212-14.076a175.432,175.432,0,0,1-19.832-19.969C42.8,137.769,27.873,118.773,28,100c0-18.047,14.808-36.758,14.958-36.945A175.351,175.351,0,0,1,62.792,43.092C62.976,42.941,81.341,28,100,28m0-3C80.095,25,60.966,40.857,60.966,40.857A179.116,179.116,0,0,0,40.738,61.219S25,79.965,25,100s15.735,39.794,15.735,39.794a179.463,179.463,0,0,0,20.225,20.365S80.091,175,100,175s39.046-14.841,39.046-14.841A179.074,179.074,0,0,0,159.273,139.8S175,120.036,175,100s-15.733-38.787-15.733-38.787a179.234,179.234,0,0,0-20.231-20.358S119.909,25.014,100,25.014V25Z"
          />
        </svg>
      </div>
    </AnimatePresence>
  );
}

export default Logo;
