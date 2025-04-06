import React, { useContext } from "react";
import { productcontext } from "../App";

const View = () => {
  const { viewpage } = useContext(productcontext);
  console.log(viewpage);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row gap-8 p-6 md:p-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={viewpage.thumbnail}
            alt={viewpage.title}
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {viewpage.title}
            </h2>
            <p className="text-gray-600 text-base">{viewpage.description}</p>
            <div className="space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Shipping:</span>{" "}
                {viewpage.shippingInformation}
              </p>
              <p>
                <span className="font-semibold">Stock:</span>{" "}
                {viewpage.stock}
              </p>
              <p>
                <span className="font-semibold">Warranty:</span>{" "}
                {viewpage.warrantyInformation}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-center w-full sm:w-auto">
              BUY NOW
            </button>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition text-center w-full sm:w-auto">
              ADD CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;

