'use client'

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
      <div className='overflow-y-auto'>
        <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5'>
          <div className='flex w-full flex-col items-start justify-center p-8 text-center md:w-2/5 md:text-left'>
            {/* <p className='w-full uppercase'>Let&apos;s know more</p> */}
            <h1 className='my-1 text-5xl font-bold leading-tight'>Aropix Studio</h1>
            <p className='text-2xl'>Producer / Core Team</p>
          </div>
        </div>

        <div className="py-0">
          <div className="px-3 max-w-8xl text-gray-500">
            <div className="relative">


              <section className="relative isolate overflow-hidden bg-white px-6 py-14 sm:py-22 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                  <figure className="mt-10">
                    <blockquote className="text-left text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                      <p>Aropix Studio is a dynamic collective of young talented artists, writers, and animators. Our mission is to create captivating short animations
                        that illuminate the most poignant aspects of the human experience. By leveraging blockchain technology, NFTs, and web3 communities, we strive to
                        not only share our work with the world but also discover emerging talent and nurture their creative voices. Ultimately, our goal is to create
                        compelling stories that inspire, educate, and entertain audiences everywhere.</p>
                      <p>
                        Our work draws inspiration from the complexities of the world around us, both the triumphs and the challenges. From global conflicts and
                        humanitarian crises to environmental issues that shape the future for generations to come, we believe that art has the power to engage people
                        in meaningful conversations about the issues that matter most. By creating animations that address these pressing topics, we hope to encourage
                        viewers to think deeply, feel compassionately, and act responsibly in the face of an ever-changing world.
                      </p>
                    </blockquote>
                  </figure>
                </div>
              </section>

              <video src='/portfolio/aropix/torkish.webm' controls className="m-auto pb-5 rounded-lg flex items-center justify-center" />
              <video src='/portfolio/aropix/wind.webm' controls className="m-auto pb-5 rounded-lg flex items-center justify-center" />
              <video src='/portfolio/aropix/souratiha.webm' controls className="m-auto pb-5 rounded-lg flex items-center justify-center" />
              <img src='/portfolio/aropix/rope.jpg' className="m-auto pb-5 rounded-lg flex items-center justify-center" width="90%" alt='rope storyboards' />
              <video src='/portfolio/aropix/arabic.webm' controls className="m-auto pb-5 rounded-lg flex items-center justify-center" />
              <p>and much more...</p>
              <img src='/portfolio/aropix/storyboard.jpg' className="m-auto pb-5 rounded-lg flex items-center justify-center" width="90%" alt='some storyboards' />

            </div>
          </div>

          <div className="footer col-span-12 p-5 text-center">
            <a href="./">← back</a>
          </div>

        </div>
      </div>
    </>
  )
}
