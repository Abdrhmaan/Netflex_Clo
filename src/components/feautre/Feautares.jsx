
import React from 'react'
import feautere from "./../../content/features.json"
import Feautare from './Feautare'

const Feautares = () => {
  console.log(feautere)
 
  return (
    <div>
     {
      feautere.map((feture) => (
     

        <Feautare key={feture.id}  {...feture} />
      ))
     }
    </div>
  )
}

export default Feautares