import React from 'react'
import Header from '../components/Header'
import Footer from  '../components/Footer'
import { IoCallSharp } from "react-icons/io5";
import WhyChooseUs from '../components/HomeComponents/WhyChooseUs';
import LearningCategories from '../components/HomeComponents/LearningCategories';
import HeroStats from '../components/HomeComponents/HeroStats';
import HowItWorks from '../components/HomeComponents/HowItWorks';
import TestimonialsSection from '../components/HomeComponents/TestimonialsSection';
import MentorCTA from '../components/HomeComponents/MentorCTA';
import StudentCTA from '../components/HomeComponents/StudentCTA';
import TopMentorCard from '../components/HomeComponents/TopMentorCard';
import HeroSection from '../components/HomeComponents/HeroSection';


function Home() {
  return (
    <>
    <Header />
    <div className='telNumber w-full h-14 bg-[#e63946] flex justify-center items-center sm:w-full'>
      <h1 className='text-white text-xl flex items-center gap-3'><IoCallSharp />: +91 90760 61166</h1>
    </div>
    <HeroSection />
    <TopMentorCard />
    <WhyChooseUs/> 
    <LearningCategories />
    <StudentCTA />
    <HowItWorks />
    <HeroStats />
    <TestimonialsSection />
    <MentorCTA />
    <Footer/>
    </>
  )
}

export default Home