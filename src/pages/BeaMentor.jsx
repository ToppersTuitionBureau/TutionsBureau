import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MentorHero from '../components/BeaMentorComponents/MentorHero'
import WhyBecomeMentor from '../components/BeaMentorComponents/WhyBecomeMentor'
import HowItWorks from '../components/BeaMentorComponents/HowItWorks'
import MentorFAQ from '../components/BeaMentorComponents/MentorFAQ'
import FinalMentorCTA from '../components/BeaMentorComponents/FinalMentorCTA'

function BeaMentor() {
  return (
    <>
    <Header/>

    <MentorHero />
    <WhyBecomeMentor />
    <HowItWorks />
    <MentorFAQ />
    <FinalMentorCTA />
    <Footer />
    </>
  )
}

export default BeaMentor