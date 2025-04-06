import React from "react";
import bannerImage from "../assets/slider-bg.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  const shopnow = () => {
    nav("/products");
  };
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="max-w-4xl text-center px-6 py-10 bg-gray-800 bg-opacity-70 rounded-xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-red-500">Sale 20% Off</span>{" "}
            <span className="block text-cyan-300 mt-2">On Everything</span>
          </h2>
          <p className="text-white text-lg mb-6">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <button
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            onClick={shopnow}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
