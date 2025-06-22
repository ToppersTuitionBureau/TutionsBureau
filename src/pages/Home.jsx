import React from 'react'
import Header from '../components/Header'
import Footer from  '../components/Footer'
import { IoCallSharp } from "react-icons/io5";
import WhyChooseUs from '../components/WhyChooseUs';
import LearningCategories from '../components/LearningCategories';
import HeroStats from '../components/HeroStats';


function Home() {
  return (
    <>
    <Header />
    <div className='telNumber w-full h-14 bg-[#e63946] flex justify-center items-center sm:w-full'>
      <h1 className='text-white text-xl flex items-center gap-3'><IoCallSharp />: +91 98765 43210</h1>
    </div>
    <WhyChooseUs/>
    <LearningCategories />
    <HeroStats />
    <Footer/>
    </>
  )
}

export default Home