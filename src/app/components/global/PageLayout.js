import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomSpinner from '../global/CustomSpinner';
import { useSelector } from "react-redux";

const PageLayout = () => {  
  const loaderStatus = useSelector((state)=> state.loader.status);
 
  
  // Automatically scrolls to top whenever pathname changes
  

  return (
    <>
        <Header />
            <div className='mt-outlet'>
                <Outlet />
            </div>
        <Footer />
        <CustomSpinner show={loaderStatus} />
    </>  
  )
}

export default PageLayout