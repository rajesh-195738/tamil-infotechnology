import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PageLayout = () => {
  return (
    <>
        <Header />
            <div className='mt-outlet'>
                <Outlet />
            </div>
        <Footer />
    </>  
  )
}

export default PageLayout