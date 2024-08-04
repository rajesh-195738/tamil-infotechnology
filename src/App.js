import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import PageLayout from './app/components/global/PageLayout';
import Blog from './app/components/pages/Blog';
import CourseDetails from './app/components/pages/courses/CourseDetails';
import ContactUs from './app/components/pages/ContactUs';
import CustomSpinner from './app/components/global/CustomSpinner';
import { useLocation } from 'react-router-dom';

// Lazy Loading Component
const LandingPage = lazy(() => import('./app/components/pages/LandingPage'));
const Courses = lazy(() => import('./app/components/pages/Courses'));
const AboutUs = lazy(() => import('./app/components/pages/AboutUs'));
const My404 = lazy(() => import('./app/components/global/My404'));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
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
    </>
  );
}

export default App;
