
import React, { useEffect, useState } from 'react'
import Header from '../components/prowse/Header'
import Banner from '../components/prowse/Banner'
import Row from '../components/prowse/Row'
import requests from '../request'

const Browe = ({ url }) => {

  return (
    <div className=' space-y-6 relative h-screen lg:h-[45vh]'>
        <Header/>
        <main className=' relative'>
          <Banner />
        </main>
        <Row title={"tradingnow"} url={requests.fetchTrending}/>
        <Row title={"Action Movies"} url={requests.fetchComedyMovies}/>
        <Row title={"Top Movies"} url={requests.fetchDocumantaries}/>
        <Row title={"Horor Movies"} url={requests.fetchNetflixOriginals}/>
        <Row title={"Comedy Movies"} url={requests.fetchHorrorMovies}/>
        
    </div>
  )
}

export default Browe