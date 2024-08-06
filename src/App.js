import React, { Suspense, lazy, useLayoutEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import PageLayout from './app/components/global/PageLayout';
import CustomSpinner from './app/components/global/CustomSpinner';
import { useLocation } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"

// Lazy Loading Component
const LandingPage = lazy(() => import('./app/components/pages/LandingPage'));
const Courses = lazy(() => import('./app/components/pages/Courses'));
const AboutUs = lazy(() => import('./app/components/pages/AboutUs'));
const My404 = lazy(() => import('./app/components/global/My404'));
const ContactUs = lazy(() => import('./app/components/pages/ContactUs'));
const CourseDetails = lazy(() => import('./app/components/pages/courses/CourseDetails'));
const Blog = lazy(() => import('./app/components/pages/Blog'));

function App() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Suspense fallback={
        <div>
          <CustomSpinner show={true} />
        </div>}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
          <Route path="*" element={<My404 />} />
        </Routes>
      </Suspense>
      <AnimatedCursor innerSize={12} outerSize={20} color='255,207,1' outerAlpha={0.6} innerScale={0.7} outerScale={2} />
    </>
  );
}

export default App;
