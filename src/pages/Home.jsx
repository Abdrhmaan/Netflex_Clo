import React from 'react'
import Homeher from '../components/Homeher'
import Feautares from '../components/feautre/Feautares'
import Faqs from '../components/faq/Faqs'
import Footers from '../components/footer/Footers'

const Home = () => {
  return (
    <div className='realtive'>
      <Homeher/>
      <Feautares/>
      <Faqs/>
      <Footers/>
    </div>
  )
}

export default Home