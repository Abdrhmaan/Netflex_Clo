
import React from 'react'
import faqs from "../../content/faq.json"
import Faq from './Faq'
const Faqs = () => {
  console.log(faqs)
  return (
    <div>

      <h1 className='text-center text-3xl mt-3'>FreaunTly Asking Question </h1>
       
       {
        faqs.map((faq) => (
          <Faq key={faq.id} {...faq} />
        ))
       }
    </div>
  )
}

export default Faqs