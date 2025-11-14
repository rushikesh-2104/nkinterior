import React from 'react'

const Contactus = () => {
  return (
    <section>
      <div className='lg:pb-20 bg-gray-50'>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-12 bg-gray-50 text-gray-800 lg:pl-30">
        <div className="flex flex-col items-center justify-center gap-8 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif">Get in Touch</h1>
          <p className="text-lg text-gray-600 md:text-2xl font-medium max-w-2xl">
            Contact us for any further questions, possible projects, and business partnerships.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            <div className="flex flex-col gap-2 p-4 rounded-xl shadow-sm shadow-gray-400 bg-white hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold">Let’s have a chat!</h3>
              <p className="text-gray-600">Telephone: <span className="font-medium">+91 9833930391</span></p>
              <p className="text-gray-600">WhatsApp: <span className="font-medium">+91 9833930391</span></p>
              <p className="font-semibold text-blue-600">info@thebombaydesignstudio.com</p>
            </div>

            <div className="flex flex-col gap-3 p-4 rounded-xl shadow-sm shadow-gray-400 bg-white hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold">Visit our location</h3>
              <p className="text-gray-600">
                Shop No 30, Tulsi Chgrays, Surana Construction Reality,<br />
                Sion Trombay Road, Chembur, Mumbai – 400071
              </p>
              <a href="https://maps.app.goo.gl/gGKmbLzkJsCxw5HL8" className="font-semibold text-blue-600 hover:underline">Get Directions</a>
            </div>
          </div>
        </div>

  
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg group">
            
            <div className="absolute inset-0 bg-gray-200 border border-gray-300 shadow-md rounded-2xl transform group-hover:-rotate-6 transition duration-500"></div>
            

            <div className="relative bg-white border border-gray-300 shadow-md rounded-2xl p-6 sm:p-8">
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Name</label>
                    <input type="text" id="name" placeholder="Your Name"
                          className="p-2 border-2 border-gray-200 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input type="email" id="email" placeholder="you@example.com"
                          className="p-2 border-2 border-gray-200 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300" />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="font-semibold">Message</label>
                  <textarea id="message" rows={6} placeholder="Write your message here..."
                            className="p-2 border-2 border-gray-200 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"></textarea>
                </div>

                <div className="flex justify-end">
                  <button type="submit"
                          className="px-6 py-2 bg-gray-200 border-2 border-gray-400 rounded-xl font-semibold hover:bg-gray-200 hover:border-blue-400 hover:scale-105 transition duration-300">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
    </section>
    
  )
}

export default Contactus