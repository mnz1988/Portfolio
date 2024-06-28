'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import { Suspense } from 'react'

const Base3D = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Base3D), { ssr: false })
const Portfo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Portfo), { ssr: false })

// const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), {ssr: false})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-15' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path className='opacity-75' fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
      <h1 className='my-4 text-5xl uppercase  ' > Loading...</h1>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const ScreenOrientation = () => {
  const [orientation, setOrientation] = React.useState("");

  // Function to update the orientation state
  function updateOrientation() {
    setOrientation(window.screen.orientation.type);
  }

  // Initial update of the orientation state and add an event listener for orientation change
  React.useEffect(() => {
    updateOrientation();
    window.addEventListener("orientationchange", updateOrientation);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("orientationchange", updateOrientation)
    }
  }, [orientation]);

  return (
    <>
      {orientation === "landscape-primary" || orientation === "landscape-secondary" ? (
        <div></div>
      ) : (
        <div className='grid grid-cols-1 grid-rows-1 place-items-center h-screen bg-gray-300'>
          <div className='col-start-1 row-start-1'>
            <div className='text-5xl'>
              Please rotate your phone to view in landscape
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function Page() {
  return (
    <>
      <ScreenOrientation />
      {/* @ts-ignore */}
      <View orbit className='fixed h-screen w-screen'>
        <Suspense fallback={null}>
          <Common color={0x303035} />
          <Base3D route='/about' scale={10.7} position={[0, 0, 0]} />
          <Portfo route='/portfolio' scale={10.7} position={[0, 0, 0]} />
        </Suspense>
      </View>

      <div className='w-screen h-screen items-start justify-left p-12 text-left home'>
        <p className='uppercase'> Welcome to my </p>
        <h1 className='my-4 text-5xl uppercase'> Art - Tech Studio </h1>
        <p className='mb-4 text-2xl'> Mojtaba Norouzi Zadeh(M.N.Z.) </p>
      </div>

    </>
  )
}