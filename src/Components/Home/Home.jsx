import React from 'react'
import pic from '../../assets/pc.jpeg'
import HeorSection from '../HeroSection/HeroSection'
import Upcoming from '../Upcoming/Upcoming'
import Certificate from '../Certificate/Certificate'
import Vendor from '../Vendor/Vendor'
import Teacher from '../Teacher/Teacher'
import Form from '../Form/Form'
import Grow from '../Grow/Grow'
import Blue from '../Blue/Blue'
import Learning from '../Learning/Learning'
import Blog from '../Blog/Blog'
import Testimonials from '../Testimonials/Testimonials'
import Category from '../Category/Category'
import Card from '../Card/Card'

const Home = () => {
  // const data ={
  //   title:"here are the best teachers",
  //   heading:"Meet the teacher who teaches you online"
  // }
  return (
    <>
      <HeorSection />
      <Grow />
     <Card />
      <Blue />
      <Category />
      <Form />
      <Teacher />
      <Certificate />
      {/* <Testimonials /> */}
      <Learning />
      <Upcoming />
      <Blog />
      <Vendor />
    </>
  )
}

export default Home