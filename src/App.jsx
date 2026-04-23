import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Pagess from "./Pages/Pagess";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
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
          path="pages"
          element={
            <PageWrapper>
              <Pagess />
            </PageWrapper>
          }
        />
        <Route
          path="blogs"
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />

        <Route
          path="gallery"
          element={
            <PageWrapper>
              <Gallery />
            </PageWrapper>
          }
        />

        <Route
          path="contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="shop"
          element={
            <PageWrapper>
              <Shop />
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
      <ScrollToTop />

      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
