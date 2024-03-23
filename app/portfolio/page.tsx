'use client'

import { Center } from '@react-three/drei'
import dynamic from 'next/dynamic'

const About = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.PortfoBack), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        <div className='flex w-full flex-col items-start justify-center p-8 text-center md:w-2/5 md:text-left'>
          <p className='w-full uppercase'>Let's know more</p>
          <h1 className='my-1 text-5xl font-bold leading-tight'>Mini Portfolio</h1>
          <p className='text-2xl leading-normal'>a summary of my activities</p>
        </div>
      </div>

      <div className="py-0">
        <div className="px-3 max-w-8xl text-gray-500">
          <div className="relative">
            <div className="relative z-10 grid gap-3 grid-cols-6">

              <div className="col-span-full lg:col-span-2 flex relative p-2 rounded-xl bg-white border 
                                border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <div className="size-fit relative">
                  <div className="relative flex items-center text-center">
                    <span className="w-full py-4 text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 
                                      dark:from-blue-400 dark:to-pink-400">Aropix Studio</span>
                  </div>
                  <h2 className="text-center font-bold text-gray-950 dark:text-white text-1xl">Producer / Core Team</h2>
                  <p className="text-center text-gray-950 dark:text-white text-1xl">International</p>
                  <video className='rounded-lg' controls autoPlay={true} loop={true} src='/portfolio/aropix/Wooden Soul by Aropix Studio.mp4' />
                </div>
              </div>

              <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-3 rounded-xl bg-white border 
                                border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <div>
                  <div className="relative flex items-center text-center">
                    <span className="w-full py-4 text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 
                                      dark:from-blue-400 dark:to-pink-400">
                      <a href="https://finalfrontiersa.com" target='blank'>Final Frontier</a></span>
                  </div>
                  <h2 className="text-center font-bold text-gray-950 dark:text-white text-1xl">
                    Web3 Core Team / Magazines & Graphics Designer
                  </h2>
                  <p className="text-center text-gray-950 dark:text-white text-1xl">USA</p>
                  <video className='rounded-lg' controls autoPlay={true} loop={true} src='/portfolio/ff/FinalFrontier.webm' />
                </div>
              </div>

              {/* Space Engineers
                  Complex GUI/GUX Retouch ( flreelance )
                  KSWH Company / international
                  /portfolio/Space Engineers.jpg 
                */}

              <div className="col-span-full lg:col-span-2 flex relative p-2 rounded-xl bg-white border 
                                border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <div className="size-fit relative">
                  <div className="relative flex items-center text-center">
                    <span className="w-full py-4 text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 
                                      dark:from-blue-400 dark:to-pink-400">Freelancing</span>
                  </div>
                  <h2 className="text-center font-bold text-gray-950 dark:text-white text-1xl">Product & Graphics Designer / WebApp Designer</h2>
                  <p className="text-center text-gray-950 dark:text-white text-1xl">International</p>
                  <video className='rounded-lg' controls autoPlay={true} loop={true} src='/portfolio/freelance/freelancing.webm' />
                </div>
              </div>

              <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-3 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <div>
                  <div className="relative flex items-center text-center">
                    <span className="w-full py-4 text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 
                                      dark:from-blue-400 dark:to-pink-400">
                      Idea Developers Accelerator
                    </span>
                  </div>
                  <h2 className="text-center font-bold text-gray-950 dark:text-white text-1xl">
                    Product Manager / Business Consultant
                  </h2>
                  <p className="text-center text-gray-950 dark:text-white text-1xl">IRI</p>
                  <video className='rounded-lg' controls autoPlay={true} loop={true} src='/portfolio/ida/IdeaDevelopersAccelerator.mp4' />
                </div>
              </div>

              <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-3 rounded-xl bg-white border 
                                border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <div>
                  <div className="relative flex items-center text-center">
                    <span className="w-full py-4 text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 
                                      dark:from-blue-400 dark:to-pink-400">
                      Phoenix Team (PNX)
                    </span>
                  </div>
                  <h2 className="text-center font-bold text-gray-950 dark:text-white text-1xl">
                    Head of Design / Product Owner
                  </h2>
                  <p className="text-center text-gray-950 dark:text-white text-1xl">IRI</p>
                  <video className='rounded-lg' controls autoPlay={true} loop={true} src='/portfolio/pnx/PNX-Upgrade.mp4' />
                </div>
              </div>

              <div className="col-span-full pt-10 p-5 sm:col-span-3 lg:col-span-2 overflow-hidden relative p-3 dark:bg-gray-900">
                <div>
                  <div className="relative flex items-center text-center">
                    <span className="w-full text-3xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 
                                      dark:from-blue-400 dark:to-pink-400">
                      Reach Out:
                    </span>
                  </div>
                  <div className='items-center text-center mt-6'>
                    <img className="rounded-lg mx-auto w-40  border" alt="profile pic" src="/moji-as-monster.webp" />
                  </div>

                  <div className="mt-8 grid grid-cols-5 items-center gap-4 px-4">

                    <a href="https://twitter.com/MNZ_Co">
                      <button className="fixed sticky h-10 w-10 transform animate-bounce duration-500 hover:-translate-y-3">
                        <img className="w-9 " alt="Contact Me using the X (Twitter)" src="/contactme icons/twitterx.svg" />
                      </button>
                    </a>

                    <a href="https://t.me/Idea_developer">
                      <button className="fixed sticky h-10 w-10 transform duration-500 hover:-translate-y-3">
                        <img className="w-9 " alt="Contact Me using the Telegram" src="/contactme icons/telegram.svg" />
                      </button>
                    </a>

                    <a href="mailto:moji.norouzi@gmail.com">
                      <button className="fixed sticky h-10 w-10 transform duration-500 hover:-translate-y-3">
                        <img className="w-9 " alt="E-Mail Me" src="/contactme icons/gmail.svg" />
                      </button>
                    </a>

                    <a href="https://github.com/mnz1988/">
                      <button className="fixed sticky h-10 w-10 transform duration-500 hover:-translate-y-3">
                        <img className="w-9 " alt="Follow me on the Github" src="/contactme icons/github.svg" />
                      </button>
                    </a>

                    <a href="https://wa.me/989195914200">
                      <button className="fixed sticky h-10 w-10 transform duration-500 hover:-translate-y-3">
                        <img className="w-9 " alt="Contact Me using the WhatsApp" src="/contactme icons/whatsapp.svg" />
                      </button>
                    </a>
                  </div>

                  <div className='text-center h-full w-full pt-20 mt-auto'>MNZ.COOL - 2024</div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer col-span-12 p-5 text-center">
          <a href="./">← back</a>
        </div>


        {/* <View className='absolute top-0 flex h-screen w-screen flex-col items-center justify-center'>
        <About />
        <Common />
      </View> */}
      </div>
    </>
  )
}