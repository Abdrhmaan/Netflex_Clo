import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { BiPlus } from 'react-icons/bi';

const Faq = ({description,title}) => {
    const [showDescription, setShowDescription] = useState(false);

  return (
    <div className='mx-auto  flex flex-col py-2 px-2 sm:max-w-screen-md'>

        <div className=' my-2 flex justify-between bg-[#303030] px-2 py-5 sm:py-5 sm:px-6'>
            <h1 className='text-lg  sm:text-2xl'>{title}</h1>
            {showDescription ? (
					<IoMdClose
						className='h-8 w-8 cursor-pointer'
						onClick={() => setShowDescription(!showDescription)}
					/>
				) : (
					<BiPlus
						className='h-8 w-8 cursor-pointer'
						onClick={() => setShowDescription(!showDescription)}
					/>
				)}
        </div>

        {showDescription && (
				<div className='bg-[#303030]'>
					<p className='px-2 py-4 text-lg sm:py-6 sm:px-6 sm:text-2xl'>
						{description}
					</p>
				</div>
			)}

    </div>
  )
}

export default Faq