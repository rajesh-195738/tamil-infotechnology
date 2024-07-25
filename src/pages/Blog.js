import React from 'react'
import BreadCrumb from './BreadCrumb';

const Blog = () => {
    const breadCrumbArr = {
        title: 'Blog',
        link: [{ path: '/', page: 'Home' }],
        CurrentPage: 'Blog',
      };
    
      return (
        <>
          <BreadCrumb content={breadCrumbArr} />
        </>
      )
}

export default Blog