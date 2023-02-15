import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home.js";
import Login from "../pages/login.js";
import Signup from "../pages/signup.js";
import RequireAuth from "../components/RequireAuth";
import PersistLogin from "../components/PersistLogin";
import { AnimatePresence } from "framer-motion";

const ROLES = {
  User: 10,
  Admin: 50,
  SuperAdmin: 99,
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />

        <Route element={<PersistLogin />}>
          {/* Protected user's routes */}
          <Route
            element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}
          ></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
