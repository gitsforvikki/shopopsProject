import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as orderReducer from "../../redux/order/order.reducer";
import Spinner from "../../util/spinner";
import * as orderActions from "../../redux/order/order.actions";

let Cart = () => {
  let dispatch = useDispatch();
  // ==========increase qty=========
  let clickToIncrQty = (productId) => {
    dispatch(orderActions.incrementQty(productId));
  };

  // =====decrease qty ==============
  let clickToDecrQty = (productId) => {
    dispatch(orderActions.decrementQty(productId));
  };

  // ========delete cart item============
  let clickToRemoveItem = (productId) => {
    dispatch(orderActions.deleteCartItem(productId));
  };
  // ======Geting order info from the redux store==========
  let orderInfo = useSelector((state) => {
    return state[orderReducer.orderFeatureKey];
  });

  let { loading, cartItems } = orderInfo;

  //=====total ============
  const calcTOtal = () => {
    let total = 0;
    for (let item of cartItems) {
      total += item.price * item.qty;
    }
    return total;
  };

  // ======CALC TAX ========
  let calcTax = () => {
    return (
      (calcTOtal() * Number(process.env.REACT_APP_SHOPING_TAX_PERCENTAGE)) / 100
    );
  };
  // ===========grand total========
  let grandTotal = () => {
    return calcTOtal() + calcTax();
  };

  // ===========React element =========
  return (
    <React.Fragment>
      <pre>{JSON.stringify(orderInfo)}</pre>
      {cartItems.length > 0 ? (
        <div className="container">
          <div className="lg:grid lg:grid-cols-3 gap-x-3">
            {loading ? (
              <Spinner />
            ) : (
              <React.Fragment>
                {cartItems.map((item) => {
                  return (
                    <div className="border-2 border-gray-300 col-span-2 h-56 ">
                      <div className="grid grid-cols-2  p-3 ">
                        <div className="">
                          <img
                            src={item.image}
                            alt=""
                            className="w-36 h-36 rounded"
                          />
                        </div>
                        <div>
                          <p className="text-xl">{item.name}</p>
                          <p className="text-sm">
                            Rs. <span>{item.price}</span> Only{" "}
                            <span className="text-red-500">(70% off)</span>
                          </p>
                          <del className="text-sm text-gray-500">Rs. 649</del>
                        </div>
                      </div>
                      <div className="px-12">
                        <div className=" border border-gray-300"></div>
                      </div>

                      <div className=" my-4 flex  justify-center gap-x-3">
                        <span>
                          <span
                            onClick={clickToDecrQty.bind(this, item._id)}
                            className="bg-purple-300 px-5 py-2 hover:cursor-pointer hover:bg-purple-400 rounded-l"
                          >
                            -
                          </span>
                          <span className="bg-gray-200 font-semibold px-5 py-2">
                            Qty: {item.qty} Only
                          </span>
                          <span
                            onClick={clickToIncrQty.bind(this, item._id)}
                            className="bg-purple-300 px-5 py-2 hover:cursor-pointer hover:bg-purple-400 rounded-r"
                          >
                            +
                          </span>
                        </span>
                        <span>
                          <span
                            onClick={clickToRemoveItem.bind(this, item._id)}
                            className="  bg-teal-300 px-5 py-2 cursor-pointer hover:bg-teal-400 rounded"
                          >
                            {" "}
                            REMOVE
                          </span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            )}
            <div className="lg:col-span-1">
              <div className="border-2 border-gray-300 mt-5 lg:mt-0">
                <h1 className="text-2xl  text-gray-900 pl-6 py-4">
                  Order Summery
                </h1>

                <div className=" text-gray-600 border-b-2 border-gray-300 pb-3 my-3 flex justify-between mx-6">
                  <span>Bag Total</span>
                  <span>
                    Rs. <span>{calcTOtal().toFixed(2)}</span>Only
                  </span>
                </div>

                <div className=" text-gray-600 border-b-2 border-gray-300 pb-5 flex justify-between mx-6">
                  <span>Tax Appield</span>
                  <span>
                    Rs. <span>{calcTax().toFixed(2)}</span>Only
                  </span>
                </div>

                <div className="text-gray-900    pb-3 my-3 flex justify-between mx-6">
                  <span>Grand Total</span>
                  <span>
                    Rs. <span>{grandTotal().toFixed(2)}</span>Only
                  </span>
                </div>
                <div className=" flex  my-6">
                  <Link
                    to="/orders/checkout"
                    className="grow text-white bg-black py-4 mx-6 text-center"
                  >
                    Place Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <h2>NO cart items</h2>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Cart;
