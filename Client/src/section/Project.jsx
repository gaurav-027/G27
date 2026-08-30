import React from 'react'
import InfiniteMenu from '../components/InfiniteMenu'

export default function Project() {

  const items = [
  {
    image: '/g27/project1.png',
    link: '/g27/projects/lancerflow',
  },
  {
    image: '/g27/project2.png',
    link: '/g27/projects/xitamin',
  },
  {
    image: '/g27/project3.png',
    link: '/g27/projects/vidio',
  },
  {
    image: '/g27/project5.png',
    link: '/g27/projects/g27',
  },
  {
    image: '/g27/project4.png',
    link: '/g27/projects/wanderlust',
  },
  {
    image: '/g27/project6.png',
    link: '/g27/projects/joybox',
  },
  {
    image: '/g27/project7.png',
    link: '/g27/projects/manojKirana',
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
