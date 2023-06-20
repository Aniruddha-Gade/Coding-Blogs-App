import { useLocation } from "react-router-dom";
import React , {useEffect} from 'react'


const ScrollToTop = () => {


  function ScrollToTopFunction() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null; // This component doesn't render anything
  }

  return (
    <div>
      <ScrollToTopFunction />

    </div>
  )
}

export default ScrollToTop