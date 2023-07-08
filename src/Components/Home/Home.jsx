import React,{useState} from 'react';
import Footer from '../Footer/Footer';
import './Home.css'
import image from '../../assets/blood-donate2.jpeg'
const Home = () => {
    const[count,setCount]=useState(16666);
  return (
    <>
    <div className='flex'>
    <div className='bg-img' ></div>
   <div className='right'>
    <div className='flex2'>
    <h1>{count}<span>+</span></h1> 
    <img src={image} alt='img'/>
    <h4>Remember that the happiest people are not those getting more, but those giving more.</h4>
    </div>
       
   </div>
    </div>
    
    <Footer/>
    </>
    
  )
}

export default Home