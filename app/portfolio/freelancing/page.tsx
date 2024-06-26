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
            <h1 className='my-1 text-5xl font-bold leading-tight 
                            bg-gradient-to-l from-blue-200 via-violet-600 to-cyan-200 bg-clip-text text-transparent'>
              Freelancing
            </h1>
            <p className='text-2xl'>2D/3D Graphic Design, UI/UX Design</p>
          </div>
        </div>
      </div>

      {/* <!-- Layout --> */}
      <div className="lg:w-5/6 px-2 py-3 mx-auto mt-10 tracking-wide md:px-4 md:mt-10">
        {/* <!-- Title --> */}
        <div className="flex justify-center text-2xl">Some of my designs for different clients around the world</div>
        {/* <!-- End Title --> */}

        {/* <!-- Accordion --> */}
        <div className="grid gap-2 py-5 text-lg leading-6 text-gray-800 md:gap-5 md:grid-cols-2">

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Lotty Dotty T-Shirt
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Product Design</span>
                </span><span className="italic font-normal ">FRANCE, USA</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Label, Sticker, Website Retouching, Packaging ...
                  <br></br>
                  <br></br><video className='rounded-xl m-auto' controls={true} autoPlay={true} loop={true} src='/portfolio/freelance/LottyDotty/LDTShirts.mp4' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/LottyDotty/LottyDottyAD-Copy.jpg' alt='' />
                  <br></br><video className='rounded-xl m-auto' controls={true} autoPlay={true} loop={true} src='/portfolio/freelance/LottyDotty/Tom.mp4' />
                  <br></br><video className='rounded-xl m-auto' controls={true} autoPlay={true} loop={true} src='/portfolio/freelance/LottyDotty/Angela.mp4' />
                  <br></br><video className='rounded-xl m-auto' controls={true} autoPlay={true} loop={true} src='/portfolio/freelance/LottyDotty/Ginger.mp4' />
                  <br></br><video className='rounded-xl m-auto' controls={true} autoPlay={true} loop={true} src='/portfolio/freelance/LottyDotty/Ben.mp4' />
                  <br></br><video className='rounded-xl m-auto' controls={true} autoPlay={true} loop={true} src='/portfolio/freelance/LottyDotty/Gina.mp4' />
                  <br></br><video className='rounded-xl m-auto' controls={true} autoPlay={true} loop={true} src='/portfolio/freelance/LottyDotty/Pierre.mp4' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  LUXURY KNITTED THROWS
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Product Design</span>
                </span><span className="italic font-normal ">AUSTRALIA</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Ardour Wolf
                  <br></br>Blanked, Texture, Packaging, Social Banner...
                  <br></br>AVES of ARDOUR Collection (Product Line Design)
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/aves.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/sparrow_throw_ardour_wolf_design_aves_of_ardour_australia_lifestyle_copy_large.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/mamastylista_ardour_wolf_design_aves_of_ardour_whistler_cotton_throws_5_large.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/Raven_Monochrome_Cotton_Throw_Flatlay_Ardour_Wolf_Design_Aves_Of_Ardour_large.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/Robin_Aves_Of_Ardour_Ardour_Wolf_Design_large.png' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/change-render-.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/logo-triangle-W.jpg' width='390' height='390' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/3.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/5.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/1.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/AVES/render-package.jpg' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Rain in All Languages
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Gift Design</span> <span className='rounded-lg bg-zinc-50 p-2'>Texture Design</span>
                </span><span className="italic font-normal ">JAPAN</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Design On Blunt xs Metro / Weather application
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Rain in All Languages 1.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Rain in All Languages 2.jpg' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  NonStop Web and Calculator
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>UI/UX Design</span>
                </span><span className="italic font-normal ">USA</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  NonStop Signs Graphics Company Website Design
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/NonStop.jpg' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Kids Room Design
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>3D design</span>
                </span>
                <span className="italic font-normal ">USA</span>
              </div></div>

              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Kids Room Design in a Box for Two / Play, Study, Sleep
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/KidsRoom1.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/KidsRoom2.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/KidsRoom3.jpg' alt='' />
                </div>
              </div></div>
          </div >

          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  We Remove Doubts
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Car Wrap Design</span>
                </span><span className="italic font-normal ">USA</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Robbie's Automotive and Collision Specialists
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Robbies-Automotive-base-Copy-2.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Robbies-Automotive-bus-4-Copy.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Robbies-Automotive-base-Copy.jpg' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Convey Brewing On-The-Go
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Packaging Design</span>
                </span><span className="italic font-normal ">USA</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  MoJoe Brewing
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/MoJoe Brewing.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/MoJoe Brewing.png' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Automatic Seller
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Wrap Design</span>
                </span><span className="italic font-normal ">USA</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Sock Fancy Company
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Sock-Fancy-1.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Sock-Fancy.jpg' width='385' height='385' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Kids Ears band
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>3D Modeling</span> <span className='rounded-lg bg-zinc-50 p-2'>Label Design</span>
                </span><span className="italic font-normal ">USA</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Children's Ears Band
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/EarsBand-present2.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/EarsBand-present.jpg' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Hair &amp; Body &amp; Me
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Packaging Design</span>
                </span><span className="italic font-normal ">AUSTRALIA</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Hair&amp;Me | Body&amp;Me
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Hair-Body-Me3.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Hair-Body-Me1.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Hair-Body-Me2.jpg' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Dental Clinic
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>3D Poster Design</span>
                </span><span className="italic font-normal ">NORWAY</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Mjosa Tannklinikk
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Mjosa Tannklinikk 1.png' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Mjosa Tannklinikk 2.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Mjosa Tannklinikk 3.jpg' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Atomic Fireballs
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>3D Modeling</span> <span className='rounded-lg bg-zinc-50 p-2'>Frame Design</span>
                </span><span className="italic font-normal ">USA</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/ATOMIC-FIRE-BALLS-2.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/ATOMIC-FIRE-BALLS-1.jpg' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold ">
                  Fashion Scarfing
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Scarf Design</span> <span className='rounded-lg bg-zinc-50 p-2'>Pattern Design</span>
                </span><span className="italic font-normal ">IRAN, TURKEY, UAE</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  HijabMe Company
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/HijabMe1.gif' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/HijabMe2.gif' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/HijabMe3.gif' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/HijabMe4.gif' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Hacking The Curiosity
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Logo Design</span> <span className='rounded-lg bg-zinc-50 p-2'>Website Redesign</span>
                </span>
                <span className="italic font-normal ">USA</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Curiosity Hack Blogging
                  <br></br><img src='/portfolio/freelance/curiosity-hack-logo-2.png' alt='' />
                  <br></br><img src='/portfolio/freelance/curiosity-hack-logo-1.png' alt='' />
                  <br></br><img src='/portfolio/freelance/curiosity-hack-logo-3.png' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Runners for Mercedes
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Poster Design</span>
                </span><span className="italic font-normal ">CANADA</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Mercedes Benz Burlington
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Mercedes-Benz.jpg' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Data Optimization
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>3D Design</span>
                </span><span className="italic font-normal ">USA</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Crosslake Tech Company
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Crosslake.jpg' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Fashion Network
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Magazine Design</span>
                </span><span className="italic font-normal ">INTERNATONAL</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  FASHION NETWORK
                  <br></br>
                  {/* <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/FASHION NETWORK 1.jpg' alt='' /> */}
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/FASHION NETWORK 2.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/FASHION NETWORK 3.jpg' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Health Care N.G.O
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Magazine Design</span>
                </span><span className="italic font-normal ">NEW ZEALAND</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  National Hauora Coalition
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/NGO-Mag-1.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/NGO-Mag-2.jpg' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Day and Night Jewel
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>3D Design</span> <span className='rounded-lg bg-zinc-50 p-2'>Banner Design</span>
                </span><span className="italic font-normal ">RUSSIA</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Safiya Alexandrites Jewellery
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/safyia.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/safyia-Small.jpg' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  La Passion De Bien Nourrir
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Billboard Design</span>
                </span><span className="italic font-normal ">CAMEROON</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Broli Company
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Broli-bilbord-2.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Broli-bilbord-1.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Broli-bilbord-3.jpg' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Hook-N-Cook Off
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Poster Design</span>
                </span><span className="italic font-normal ">USA</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Vyve Broadband Company
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Hook-N-Cook-Off.jpg' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Pets Toys
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Packaging Design</span>
                </span><span className="italic font-normal ">USA</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Doggy Mailbox
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/DoggyMailbox-1.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/DoggyMailbox-2.jpg' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Ultimate Heal
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Label Design</span> <span className='rounded-lg bg-zinc-50 p-2'>Packaging Design</span>
                </span>
                <span className="italic font-normal ">USA</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  <img className='rounded-xl m-auto' src='/portfolio/freelance/Bowel-Restore-LBL-2.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Bowel-Restore-LBL-3.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Bowel-Restore-LBL-4.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Bowel-Restore-LBL-1.jpg' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Certificate and Diploma
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Certificate Design</span> <span className='rounded-lg bg-zinc-50 p-2'>3D Design</span>
                </span><span className="italic font-normal ">USA, SPAIN</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Wise Athena Company
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/WISE-ATHENA-ALEN-CERTIFICATE.jpg' alt='' />
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/WISE-ATHENA-ALEN-CERTIFICATE2.jpg' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-br from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Deck Patterns
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>3D Modeling</span> <span className='rounded-lg bg-zinc-50 p-2'>Texture Design</span>
                </span><span className="italic font-normal ">USA</span>
              </div></div><div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Deck Pattern for Kayak
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/deck-pattern-for-kayak.jpg' alt='' />
                </div></div></div ></div >
          {/* < !--End of tile -- > */}

          {/* <!-- Start of Tile --> */}
          <div>
            <div className="relative transition-all duration-700 border rounded-xl bg-gradient-to-tl from-purple-300 via-slate-200 to-rose-300">
              <div className="w-full p-4 text-left"><div className="flex items-center justify-between">
                <span className="tracking-wide font-semibold">
                  Gottes Weg
                  <br></br><br></br><span className='rounded-lg bg-zinc-50 p-2'>Logo Design</span> <span className='rounded-lg bg-zinc-50 p-2'>Business Card Design</span>
                </span>
                <span className="italic font-normal ">GERMANY</span>
              </div></div>
              <div className="items-center">
                <div className="px-4 pb-4 text-gray-500">
                  Gottes Weg Church
                  <br></br>
                  <br></br><img className='rounded-xl m-auto' src='/portfolio/freelance/Business-Card-Gottes-Weg.jpg' alt='' />
                </div></div></div></div >
          {/* <!-- End of tile --> */}

        </div >
        {/* // < !--End Accordion-- > */}
      </div >
      {/* // < !--End Layout-- > */}

      <div className="footer col-span-12 p-5 text-center">
        <a href="./">← back</a>
      </div>

    </>
  )
}
