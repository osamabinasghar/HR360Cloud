import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="block">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid grid-cols-[auto] justify-between gap-6 max-[991px]:grid-flow-col max-[991px]:[grid-template:'.'_auto_'.'_auto_/_0.75fr_0.75fr_0.75fr] max-[767px]:gap-y-8 max-[479px]:auto-cols-auto max-[479px]:grid-flow-dense sm:grid-cols-2 sm:gap-4 md:grid-cols-[max-content_auto_auto_auto_auto] lg:gap-10">
          <div className="flex max-w-sm grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:[grid-area:span_1/span_4/span_1/span_4] max-[767px]:flex-col max-[767px]:[grid-area:span_1/span_2/span_1/span_2] lg:mr-10">
            <div className="flex flex-col items-start gap-6">
              <a href="#" className="inline-block max-w-full text-black">
                <img
                  src="../../assets/Powered-by-logo.svg" width={150} 
                  alt=""
                  className="inline-block max-h-10"
                />
              </a>
              <p className="text-black-900">
              Digital Transformation<br/>
              Revolutionizing Businesses
              </p>
            </div>
            {/* <div className="mt-12 grid w-full max-w-52 grid-flow-col grid-cols-4 gap-3 mb-8 md:mb-0">
              <a
                href="#"
                className="mx-auto flex max-w-6 flex-col items-center justify-center text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945b4ae6cf7b_Vector-1.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="mx-auto flex max-w-6 flex-col items-center justify-center text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945560e6cf77_Vector.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="mx-auto flex max-w-6 flex-col items-center justify-center text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940535e6cf7a_Vector-3.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="mx-auto flex max-w-6 flex-col items-center justify-center text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9433a9e6cf88_Vector-2.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
            </div> */}
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">Locations</p>
            </div>
            <div className="grid w-full max-w-xs grid-flow-row grid-cols-4 gap-3 mb-8 md:mb-0">
              <a
                className="mx-auto flex flex-row items-center justify-center text-black"
              >
                <img src="../../assets/us.svg" width={32} alt="usa" className='mr-2' />
                 USA
              </a>
            </div>
            <div className="mt-5 grid w-full max-w-xs grid-flow-row grid-cols-4 gap-3 mb-8 md:mb-0">
              <a
                className="mx-auto flex flex-row items-center justify-center text-black"
              >
                <img src="../../assets/canada.svg" width={32} alt="canada" className='mr-1' />
                 CANADA
              </a>
            </div>
            <div className="mt-5 grid w-full max-w-xs grid-flow-row grid-cols-4 gap-3 mb-8 md:mb-0">
              <a
                className="mx-auto flex flex-row items-center justify-center text-black"
              >
                <img src="../../assets/qatar.svg" alt="qatar" width={32} className='mr-2' />
                 QATAR
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">Locations</p>
            </div>
            <div className="grid w-full max-w-xs grid-flow-row grid-cols-4 gap-3 mb-8 md:mb-0">
              <a
                className="mx-auto flex flex-row items-center justify-center text-black"
              >
                <img src="../../assets/karachi.svg" alt="karachi" width={32} className='mr-5' />
                 KARACHI
              </a>
            </div>
            <div className="mt-5 grid w-full max-w-xs grid-flow-row grid-cols-4 gap-3 mb-8 md:mb-0">
              <a
                className="mx-auto flex flex-row items-center justify-center text-black"
              >
                <img src="../../assets/hyderabad.svg" alt="hyderabad" width={32} className='mr-5' />
                  HYDERABAD
              </a>
            </div>
            <div className="mt-5 grid w-full max-w-xs grid-flow-row grid-cols-4 gap-3 mb-8 md:mb-0">
              <a
                className="mx-auto flex flex-row items-center justify-center text-black"
              >
                <img src="../../assets/lahore.svg" alt="lahore"  className='mr-3' width={32}/>
                 LAHORE
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">Follow Us</p>
            </div>

            <div className="grid w-full max-w-xs grid-flow-row grid-cols-4 gap-3 mb-8 md:mb-0">
              <a
                href="tel:+923324666823"
                target="_blank"
                className="mx-auto flex flex-row items-center justify-center text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone mr-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                 +923324666823
              </a>
            </div>

            <div className="mt-5 grid w-full max-w-xs grid-flow-row grid-cols-4 gap-3 mb-8 md:mb-0">
              <a
                href="mailto:info@innovadorsolutions.com"
                target="_blank"
                className="mx-auto flex flex-row items-center justify-center text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail mr-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                 info@innovadorsolutions.com
              </a>
            </div>

            <div className="mt-5 grid w-full max-w-52 grid-flow-col grid-cols-4 gap-3 mb-8 md:mb-0">
            <a
                href="https://innovadorsolutions.com/"
                target='_blank'
                className="mx-auto flex max-w-6 flex-col items-center justify-center text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </a>
              <a
                href="https://www.facebook.com/innovadors/"
                target='_blank'
                className="mx-auto flex max-w-6 flex-col items-center justify-center text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://pk.linkedin.com/company/innovadorsolutions"
                target='_blank'
                className="mx-auto flex max-w-6 flex-col items-center justify-center text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">Comapny</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Blog
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Jobs
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Press
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Partners
            </a>
          </div> */}
        </div>
        {/* Divider */}
        <div className="mb-14 mt-16 w-full border-b border-black"></div>
        {/* Divider */}
        <p className='text-center font-medium'>© Copyright 2024. HR360Cloud by <a href='https://innovadorsolutions.com' target='_blank'>Innovador Solutions</a>. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer