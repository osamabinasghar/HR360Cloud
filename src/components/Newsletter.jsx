import React from 'react'

const Newsletter = () => {
  return (
    <>
        <section className='bg-gray-100'>    
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="bg-gray-100 p-8 text-center sm:p-10 md:p-16">
            
            {/* Title */}
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Subscribe to Our Newsletter
            </h2>
            {/* <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-500 sm:text-base md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna fringilla urna
            </p> */}
            <div className="mx-auto mb-4 flex max-w-lg justify-center">
              <form
                name="email-form"
                method="get"
                className="flex w-full flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  className="h-9 w-full rounded-md border border-solid border-blue-700 px-3 py-6 text-sm text-gray-500"
                  placeholder="Enter your email"
                />
                <input
                  type="submit"
                  value="Notify me"
                  className="cursor-pointer rounded-md bg-blue-700 px-6 py-2 font-semibold text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter