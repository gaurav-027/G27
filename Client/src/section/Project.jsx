import React from 'react'
import LightRays from '../components/LightRays'
import InfiniteMenu from '../components/InfiniteMenu'

export default function Project() {

  const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: '/hello',
    title: 'Lancerflow',
    description: 'hheeeeeee'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'VIDIO',
    description: 'Haaaaaa'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'G27',
    description: 'Heeyyyyyyyy'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Wanderlust',
    description: 'Hoooooooo'
  }
];

  return (
    <>

    <div className='relative w-ful h-screen'>
      <div className='w-full h-full absolute top-0'>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
      />
</div>
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
