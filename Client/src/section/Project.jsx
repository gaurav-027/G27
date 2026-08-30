import React from 'react'
import InfiniteMenu from '../components/InfiniteMenu'

export default function Project() {

  const items = [
  {
    image: '/G27/project1.png',
    link: '/G27/lancerflow',
  },
  {
    image: '/G27/project2.png',
    link: '/G27/xitamin',
  },
  {
    image: '/G27/project3.png',
    link: '/G27/vidio',
  },
  {
    image: '/G27/project5.png',
    link: '/G27/G27',
  },
  {
    image: '/G27/project4.png',
    link: '/G27/wanderlust',
  },
  {
    image: '/G27/project6.png',
    link: '/G27/joybox',
  },
  {
    image: '/G27/project7.png',
    link: '/G27/manojKirana',
  }
];

  return (
    <>

    <div className='relative w-ful h-screen'>
<div className='h-full  absolute top-0'>
  <InfiniteMenu items={items}
    scale={1}
/>
</div>
<div className='w-full absolute top-0 p-10 flex justify-between'>
  <h1 className='text-6xl font-bold'>Projects</h1>
  <p className='text-3xl w-1/4'>Hold and turn screen for explore other projects.</p>
</div>
    </div>
      
    </>
  )
}
