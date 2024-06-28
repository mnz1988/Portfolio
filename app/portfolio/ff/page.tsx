'use client'

import dynamic from 'next/dynamic'

const About = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.PortfoBack), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
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
      <div className='overflow-y-auto'>
        <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5'>
          <div className='flex w-full flex-col items-start justify-center p-8 text-center md:w-2/5 md:text-left'>
            <h1 className='my-1 text-5xl font-bold leading-tight'>Final Frontier</h1>
            <p className='text-2xl'>Metaverse Gaming Guild & DAO</p>
          </div>
        </div>

        <div className="py-0">
          <div className="px-3 max-w-8xl text-gray-500">
            <div className="relative">

              <section className="relative overflow-hidden bg-white px-6 py-14 sm:py-22 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                  <figure className="mt-10">
                    <blockquote className="text-left text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                      <p>Metaverse and blockchain gaming affords Final Frontier with opportunities to earn while playing games and generate methods to earn rewards from contributions by employing teamwork, strategy, and ethos.</p>
                    </blockquote>
                  </figure>
                </div>
              </section>

            </div>
          </div>

        </div>
      </div>

      {/* <!-- component --> */}
      <div className="bg-white py-15 sm:py-22">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

            <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-purple-400">
              <h3 id="branding" className="text-lg font-semibold leading-8 text-blue-400">Branding & Identity</h3>
              <p className="mt-4 text-sm leading-6 text-green-600">Redesigning the Branding and Visual Identity to adapt to different platforms and creating a Visual Identity Journal for different applications</p>
              <br></br>
              <img src='/portfolio/ff/FFLogo_Color_SIngle-Stack.png' className="m-auto pb-5 rounded-lg flex items-center justify-center" width="100%" alt='branding' />
              <br></br>
              <video src='/portfolio/ff/ff-logo.mp4' controls autoPlay loop className="m-auto rounded-lg flex items-center justify-center" />
              <br></br>
              <a href="https://finalfrontiersa.com/" target='blank' aria-describedby="branding" className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-green-800 focus-visible:outline-red-600">
                FinalFrontier Website ⤤
              </a>
            </div>

            <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-purple-400">
              <h3 id="gear-shop" className="text-lg font-semibold leading-8 text-blue-400">GEAR SHOP</h3>
              <p className="mt-4 text-sm leading-6 text-green-600">Men's and Women's Accessories, Mouse Pads, Drinkware, Sportswear, PPE Hoodies, Jerseys, Pants, Collared, Pullovers, Leggings...</p>
              <br></br>
              <video src='/portfolio/ff/merchand.mp4' controls autoPlay loop className="m-auto rounded-lg flex items-center justify-center" />
              <a href="https://gamer.playmakerswanted.com/store/finalfrontier" target='blank' aria-describedby="gear-shop" className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-green-800 focus-visible:outline-red-600">
                Shoping ⤤
              </a>
              <br></br>
              <div className="rounded-2xl mt-3 p-5 ring-1 ring-purple-400">
                <span className="text-sm font-semibold leading-6 text-purple-600">Social Links:</span>
                <a href="https://twitter.com/FinalFrontierSA" target='blank' aria-describedby="gear-shop" className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-600 text-white shadow-sm hover:bg-gray-800 focus-visible:outline-red-600">
                  X (twitter) ⤤
                </a>
                <a href="https://discord.gg/yW5k89Kyfj" target='blank' aria-describedby="gear-shop" className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white shadow-sm hover:bg-blue-800 focus-visible:outline-red-600">
                  Discord ⤤
                </a>
              </div>
            </div>

            <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-purple-400">
              <h3 id="mag" className="text-lg font-semibold leading-8 text-blue-400">Magazines</h3>
              <p className="mt-4 text-sm leading-6 text-green-600">FRONT (Main Magazine)<br></br>METAPOWER (Official Women's Empowerment Magazine of the Metaverse)</p>
              <br></br>
              <video src='/portfolio/ff/mag.mp4' controls autoPlay loop className="m-auto -mt-4 mb-4 rounded-lg flex items-center justify-center" />
              <a href="https://finalfrontiersa.com/front-magazine.html" aria-describedby="mag" className="rounded-md py-3 mx-3 px-6 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-green-800 focus-visible:outline-red-600">
                FRONT ⤤
              </a>
              <a href="https://finalfrontiersa.com/front-magazine.html" aria-describedby="mag" className="rounded-md py-3 mx-3 px-6 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-green-800 focus-visible:outline-red-600">
                METAPOWER ⤤
              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-13 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

            <div className="rounded-3xl p-6 ring-1 xl:p-8 ring-purple-400">
              <h3 id="event" className="text-lg font-semibold leading-8 text-blue-400">Events</h3>
              <video src='/portfolio/ff/event3.mp4' controls className="m-auto mb-3 rounded-lg flex items-center justify-center" />
              <video src='/portfolio/ff/event1.mp4' controls className="m-auto mb-3 rounded-lg flex items-center justify-center" />
              <img src='/portfolio/ff/req 8 - giveaway.jpg' className="m-auto mb-3 rounded-lg flex items-center justify-center" width="100%" alt='branding' />
            </div>

            <div className="rounded-3xl p-6 ring-1 xl:p-8 ring-purple-400">
              <h3 id="ads" className="text-lg font-semibold leading-8 text-blue-400">ADS</h3>
              <p className="mt-4 text-sm leading-6 text-green-600">including advertising for crypto projects inside our magazines and recruiting game players</p>
              <br></br>
              <video src='/portfolio/ff/ads.mp4' controls autoPlay loop className="m-auto mb-3 rounded-lg flex items-center justify-center" />
            </div>


          </div>
        </div>
      </div>

      <div className="footer col-span-12 p-5 text-center">
        <a href="./">← back</a>
      </div>

    </>
  )
}
