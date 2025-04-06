import React, { useContext, useState, useEffect } from "react";
import { productcontext } from "../App";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { items,searchTerm, setviewpage } = useContext(productcontext);
  const [open, setOpen] = useState(null); // 'category' or 'price'
  const [filter, setfilter] = useState([...items]);
  const nav=useNavigate();


  useEffect(() => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilter(filtered);
    setPage(1);
  }, [items, searchTerm]);

  //pagination
  const [page, setPage] = useState(1);
  const perPage = 6;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentItems = filter.slice(start, end);
  const totalPages = Math.ceil(filter.length / perPage);


  // Price sort
  const sortproduct = (order) => {
    const sortedItems = [...filter];
    if (order === "asc") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sortedItems.sort((a, b) => b.price - a.price);
    }
    setfilter(sortedItems);
    setPage(1); // Reset to page 1
    setOpen(null);  //dropdown close
  };

  //categories sort
  const filterproduct = (category) => {
    if (category === "all") {
      setfilter([...items]); //show all products
    } else {
      const filteredItems = items.filter((item) => item.category === category);
      setfilter(filteredItems);
    }
    setPage(1);    //reset to page 1
    setOpen(null); //close dropdown
  };

  //viewpage
  const addview=(e)=>{
    setviewpage(e);
    window.scrollTo(0, 0);
    nav("/view")
  }

  return (
    <div className="p-4 bg-slate-50 min-h-screen">
      <h2 className="text-center font-bold text-2xl py-3  text-blue-950">All Products</h2>

      {/* Filters Row */}
      <div className="flex gap-4 justify-center p-5">
        {/* Categories filter*/}
        <div className="relative">
          <button
            onClick={() => setOpen(open === "category" ? null : "category")}
            className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
          >
            Categories
          </button>
          {open === "category" && (
            <div className="absolute mt-2 w-40 bg-white border rounded shadow">
              <ul className="py-1 text-sm text-gray-700">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => filterproduct("beauty")}
                >
                  Beauty products
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => filterproduct("fragrances")}
                >
                  Fragrances products
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => filterproduct("furniture")}
                >
                  Furniture products
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => filterproduct("groceries")}
                >
                  Groceries products
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => filterproduct("all")}
                >
                  All products
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="relative">
          <button
            onClick={() => setOpen(open === "price" ? null : "price")}
            className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
          >
            Price Range
          </button>
          {open === "price" && (
            <div className="absolute mt-2 w-40 bg-white border rounded shadow">
              <ul className="py-1 text-sm text-gray-700">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => sortproduct("asc")}
                >
                  Low to High
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => sortproduct("desc")}
                >
                  High to Low
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Product cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow rounded text-center"
          >
            <div className="w-full h-40 overflow-hidden flex justify-center items-center mb-3">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
            <Rating name="size-medium" defaultValue={product.rating} />
            <div>
              <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded" onClick={()=>addview(product)}>
                view
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-3">
        <button
          onClick={() => {
            setPage(page - 1);
            window.scrollTo(0, 0);
          }}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Prev
        </button>
        <span className="text-gray-700 self-center">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => {
            setPage(page + 1);
            window.scrollTo(0, 0);
          }}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
