import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as productActions from "../../redux/product/product.action";

let UploadProduct = () => {
  let dispatch = useDispatch();
  let [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    qty: "",
    image: "",
    category: "",
    description: "",
    usage: "",
  });

  let updateInput = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  let convertBase64String = (imageFile) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.addEventListener("load", () => {
        if (fileReader.result) {
          resolve(fileReader.result);
        } else {
          reject("Error Occurred");
        }
      });
    });
  };

  let updateImage = async (event) => {
    let imageFile = event.target.files[0];
    let base64Image = await convertBase64String(imageFile);
    setProduct({
      ...product,
      image: base64Image,
    });
  };

  let submitUploadProduct = (event) => {
    event.preventDefault();
    dispatch(productActions.uploadProducts(product));
    setProduct({
      name: "",
      brand: "",
      price: "",
      qty: "",
      image: "",
      category: "",
      description: "",
      usage: "",
    });
  };

  return (
    <React.Fragment>
      <pre>{JSON.stringify(product)}</pre>
      <div className="h-screen bg-gray-100 flex flex-col  items-center">
        <div className=" container w-full">
          <span className="text-2xl">Upload a Product to store</span>
          <div className="bg-indigo-400 h-2 mt-5 rounded-t-md"></div>
          <div className="shadow-md hover:shadow-2xl">
            <form
              onSubmit={submitUploadProduct}
              className="px-8 py-6 bg-white flex  flex-col  gap-y-4"
            >
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={updateInput}
                  className="w-full border-2 px-4 py-2 rounded hover:outline-none  
                   focus:outline-none focus:ring-1 focus:ring-indigo-400 "
                  placeholder="Name"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={product.brand}
                  onChange={updateInput}
                  className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  placeholder="Brand"
                  required
                />
              </div>

              {/* select category */}
              <div className="min-w-max grow">
                <select
                  name="category"
                  value={product.category}
                  onChange={updateInput}
                  required
                  className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                >
                  <option>Select a category </option>
                  <option value="MEN">Men's wear </option>
                  <option value="WOMEN">Women's wear </option>
                  <option value="KIDS">Kids's wear </option>
                </select>
              </div>

              {/* image upload */}
              <div className="">
                <input
                  type="file"
                  onChange={updateImage}
                  className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  id="customFile"
                  required
                />
                <label
                  className="custom-file-label"
                  htmlFor="customFile"
                ></label>
              </div>

              {/* Price */}
              <div>
                <input
                  type="number"
                  id="brand"
                  name="price"
                  value={product.price}
                  onChange={updateInput}
                  className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  placeholder="Price"
                  required
                />
              </div>

              {/* Quantity */}
              <div>
                <input
                  type="number"
                  name="qty"
                  value={product.qty}
                  onChange={updateInput}
                  className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  placeholder="Quantity"
                  required
                />
              </div>

              {/* description */}
              <div>
                <textarea
                  rows="4"
                  name="description"
                  value={product.description}
                  onChange={updateInput}
                  className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  placeholder="Description"
                  required
                />
              </div>

              {/* usages */}
              <div>
                <textarea
                  rows="4"
                  name="usage"
                  value={product.usage}
                  onChange={updateInput}
                  className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  placeholder="Usages"
                  required
                />
              </div>

              <div className="my-6 flex justify-between items-baseline">
                <button
                  type="submit"
                  className="bg-indigo-500 px-4 py-2 text-white rounded hover:bg-indigo-600  hover:shadow-indigo-500 hover:shadow-4lg"
                >
                  Upload
                </button>
                <a href="#" className="text-sm hover:underline">
                  Reset
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadProduct;
