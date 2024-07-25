import React from 'react'
import BreadCrumb from './BreadCrumb';

const AboutUs = () => {
  const breadCrumbArr = {
    title: 'About Us',
    link: [{ path: '/', page: 'Home' }],
    CurrentPage: 'About Us'
  };

  return (
    <>
      <BreadCrumb content={breadCrumbArr} />
    </>
  )
}

export default AboutUs