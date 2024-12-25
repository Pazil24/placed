import React from 'react'
import CarouselBanner from '../components/CarouselBanner'
import HowSection from '../components/HowSection'
import StudentSection from '../components/StudentSection'
import HowForRecruiters from '../components/HowForRecruiters'
import RecruiterSection from '../components/RecruiterSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <>
      <CarouselBanner/>
      <HowSection/>
      <StudentSection/>
      <HowForRecruiters/>
      <RecruiterSection/>
      <FAQSection/>
      <Footer/>
    </>
  )
}

export default Landing
