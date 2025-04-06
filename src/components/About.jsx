import React from 'react';
import { FaTruck, FaShip, FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="h-[50vh] bg-[#06202B] flex flex-col items-center justify-center text-center px-4">
        <p className="text-orange-500 uppercase tracking-[0.4em] text-sm mb-2">
          We Sale Good Products
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-extrabold">
          About Us
        </h1>
      </div>

      {/* Why Shop With Us Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Shop With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 place-items-center">
          {/* Card 1 */}
          <div className="bg-[#062B3A] text-white p-8 rounded-md shadow-md w-full max-w-sm text-center">
            <FaTruck size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#062B3A] text-white p-8 rounded-md shadow-md w-full max-w-sm text-center">
            <FaShip size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#062B3A] text-white p-8 rounded-md shadow-md w-full max-w-sm text-center">
            <FaCheck size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

