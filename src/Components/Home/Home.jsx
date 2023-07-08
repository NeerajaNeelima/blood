import React from 'react';
import Footer from '../Footer/Footer';
import './Home.css'
import image from '../../assets/blood.jpeg'
const Home = () => {
  return (
    <>
    <div className='bg-img' style={{ backgroundImage:`url(${image})`,backgroundSize:'cover' }}>
    </div>
    
    <Footer/>
    </>
    
  )
}

export default Home