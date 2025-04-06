import React from 'react';

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <div className="h-[50vh] flex items-center justify-center bg-[#05232E]">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold">
          Contact Us
        </h1>
      </div>


      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* Information Section */}
        <div>
          <h3 className="text-red-600 uppercase font-semibold tracking-wide mb-2">Information</h3>
          <h2 className="text-4xl font-bold mb-4">Contact us</h2>
          <p className="text-gray-600 mb-6">
            As you might expect of a company that began as a high-end interiors contractor,
            we pay strict attention.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-semibold">America</h4>
            <p className="text-gray-700">195 E Parker Square Dr, Parker, CO 801</p>
            <p className="text-gray-700">+43 982-314-0958</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">France</h4>
            <p className="text-gray-700">109 Avenue Léon, 63 Clermont-Ferrand</p>
            <p className="text-gray-700">+12 345-423-9893</p>
          </div>
        </div>

        {/* Form Section */}
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="6"
            className="border border-gray-300 p-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 w-max tracking-widest uppercase font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;


