import React from 'react'
import InfiniteMenu from '../components/InfiniteMenu'

export default function Project() {

  const items = [
  {
    image: '/project1.png',
    link: '/projects/lancerflow',
  },
  {
    image: '/project2.png',
    link: '/projects/xitamin',
  },
  {
    image: '/project3.png',
    link: '/projects/vidio',
  },
  {
    image: '/project5.png',
    link: '/projects/g27',
  },
  {
    image: '/project4.png',
    link: '/projects/wanderlust',
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
