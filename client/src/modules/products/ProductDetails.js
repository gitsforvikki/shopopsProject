import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import image from "../../assets/products/womens/01.webp";
import * as productActions from "../../redux/product/product.action";
import * as productReducer from "../../redux/product/product.reducer";
import * as orderActions from "../../redux/order/order.actions";

let ProductDetails = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [selectedQty, setSelectedQty] = useState("");
  // ======== geting product id from url =========
  let { productId } = useParams();

  // ========get the product when page load ========
  useEffect(() => {
    dispatch(productActions.getSingleProduct(productId));
  }, []);

  // ========== get product data from the store============
  let productInfo = useSelector((state) => {
    return state[productReducer.productFeatureKey];
  });

  let { loading, selectedProducts } = productInfo;

  let submitAddToCart = (event) => {
    event.preventDefault();
    let upadatedItem = {
      ...selectedProducts,
      qty: selectedQty !== "" ? selectedQty : 1,
    };

    dispatch(orderActions.addToCart(upadatedItem, navigate));
  };

  // ==========================React element ============================
  return (
    <React.Fragment>
      <pre>{JSON.stringify(selectedQty)}</pre>
      <div className="container">
        <div className=" grid grid-flow-row gap-y-6 lg:grid-flow-col ">
          <div className="flex lg:justify-center ">
            <img
              src={selectedProducts.image}
              alt=""
              className="w-full rounded-2xl lg:w-96 lg:h-96 "
            />
          </div>
          <div className="ml-6  flex flex-col gap-y-4">
            <h1 className="text-2xl text-gray-700">{selectedProducts.name}</h1>
            <p className="flex gap-4">
              <span className="text-red-500">
                Rs. {selectedProducts.price} Only
              </span>
              <del className="text-sm text-gray-600">Rs. 649</del>
            </p>
            <div className="flex gap-x-2">
              <form>
                <select
                  name="category"
                  value={selectedQty}
                  onChange={(e) => setSelectedQty(e.target.value)}
                  required
                  className="  border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                >
                  <option value="">Select Quantity </option>
                  <option value="1">1 </option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                  <option value="5">5 </option>
                </select>
              </form>
              <div>
                <h4
                  onClick={submitAddToCart}
                  type="submit"
                  className="py-2 px-6 border-2 border-gray-300 bg-gray-500 inline-block hover: "
                >
                  Add to cart
                </h4>
              </div>
            </div>
            <div>
              <p className="border-b-2 border-gray-300 py-0">Usage</p>
              <p className="mt-3">{selectedProducts.usage}</p>
            </div>
            <div>
              <p className="border-b-2 border-gray-300 py-0">Descriptions</p>
              <p className="mt-3">{selectedProducts.description}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
