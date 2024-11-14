import React from 'react'
import Header from '../Components/Headers/Header'
import TemplateComponent from '../Components/Templates/TemplateComponent'
import CommentsComponent from '../Components/Comments/CommentsComponent'
import FeaturesComponent from '../Components/Features/FeaturesComponent'
import Footer from '../Components/Footer/Footer'

const Template = () => {
  return (
    <div>
      <Header/>
      <TemplateComponent/>
      <FeaturesComponent/>
      <CommentsComponent/>
      <Footer/>
    </div>
  )
}

export default Template
