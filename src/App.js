import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import PageLayout from './global/PageLayout';
import Blog from './pages/Blog';


// Lazy Loading Component
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Courses = lazy(() => import('./pages/Courses'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const My404 = lazy(() => import('./global/My404'));

function App() {
  return (
    <>
    <Suspense fallback={<div>Loading... </div>}>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
        <Route path="*" element={<My404 />} />
      </Routes>  
    </Suspense>
    </>
  );
}

export default App;
