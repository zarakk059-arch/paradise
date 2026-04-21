import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./Pages/Home";
import Service from "./Pages/Service";
import ScrollToTop from "./Components/Scroll/ScrollToTop";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        <Route
          path="/service"
          element={
            <PageWrapper>
              <Service />
            </PageWrapper>
          }
        />

        <Route
          path="*"
          element={
            <PageWrapper>
              <h1 className="text-center text-3xl mt-20">
                404 Page Not Found
              </h1>
            </PageWrapper>
          }
        />

      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* ✅ THIS FIXES SCROLL POSITION */}
      <ScrollToTop />

      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;