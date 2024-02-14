
import React from 'react'
import footer from "../../content/footerLinks.json"
import Footer from './Footer'

const Footers = () => {
  return (
  
		<div className='mt-10 mb-16 sm:mx-auto sm:max-w-screen-lg'>
			<h1 className='text-[#6c6c6c]'>Questions? Contact us.</h1>
			<div className='mx-10 grid grid-cols-2 sm:grid-cols-4'>
				{footer.columns.map((links, index) => (
					<Footer key={index} links={links} />
				))}
			</div>
			<p className='my-1 text-sm text-[#6c6c6c]'>Netflix in Canada</p>
		</div>

  )
}

export default Footers