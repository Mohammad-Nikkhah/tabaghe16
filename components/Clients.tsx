import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-30' id='testimonials'>
    <h1 className='heading mb-10'>
       Hear What Our Listeners  {' '}
        <span className='text-gray-500'> Say </span>
    </h1>
    <div className='flex flex-col items-center justify-center'>
        <div className='h-[50vh] md:[h-30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
           <InfiniteMovingCards
             items={testimonials}
             direction='right'
             speed='slow'
           />
        </div>
        <div className='flex flex-wrap justify-center items-center gap-4 md:gap-16'>
          {companies.map(({id,img,name,link,title}) => (
            <a href={link} key={id} className='flex items-center md:max-w-60 max-w-32 gap-2'>
                 <img
                    src={img}
                    width="80"
                    height="80"
                    alt={name}
                    className='md:w-10 '
                 />
                 <div>{title}</div>
            </a>
          ))}
        </div>
    </div>
    </div>

  )
}

export default Clients