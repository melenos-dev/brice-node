import { NavLink } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import styled from "styled-components";
import { motion } from "framer-motion";
import useSound from "use-sound";
import lazerSound from "../sounds/laser.wav";
import jumpSound from "../sounds/jump.wav";

const CardLabel = styled.span``;
/*
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
*/

export default function Menu() {
  /* const { auth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async (e) => {
    e.preventDefault();
    await logout();
    navigate("/");
  };*/

  const matches = useMediaQuery("(min-width:768px)");
  const [jump] = useSound(jumpSound);
  const [lazer] = useSound(lazerSound);

  return (
    <nav className="navbar navbar-expand container-fluid">
      <motion.ul
        className="navbar-nav w-100 justify-content-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <motion.li
          className="navbar__item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={{
            visible: { opacity: 1, scale: [0, 2, 1] },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <a href="files/papers.pdf" className="file" onMouseEnter={lazer}>
            Papiers<span className="end">.pdf</span>
          </a>
        </motion.li>
        <div className="d-flex ms-auto me-auto">
          <button
            className="navbar__item"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsedMenu"
            aria-expanded={matches ? "true" : "false"}
            aria-controls="collapsedMenu"
          ></button>
          <div
            className={`collapse collapse-horizontal ${
              matches ? "show" : "hide"
            }`}
            id="collapsedMenu"
          >
            <div className="d-flex">
              <li className="navbar__item">
                <NavLink to="/">À propos</NavLink>
              </li>

              <li className="navbar__item">
                <NavLink to="/handicap">Handicap</NavLink>
              </li>

              <li className="navbar__item">
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>

              <li className="navbar__item">
                <NavLink to="/team">Team</NavLink>
              </li>

              <li className="navbar__item">
                <NavLink to="mailto:hello@seraphinbrice.fr" onMouseEnter={jump}>
                  Contact
                </NavLink>
              </li>
            </div>
          </div>
        </div>
      </motion.ul>
    </nav>
  );
}
