import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import * as productActions from "../../redux/product/product.action";
import * as productReducer from "../../redux/product/product.reducer";
import * as orderActions from "../../redux/order/order.actions";
import { HiTag } from "react-icons/hi2";
import Spinner from "../../util/spinner";

let KidsWear = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getKidsProducts());
  }, []);

  let productsInfo = useSelector((state) => {
    return state[productReducer.productFeatureKey];
  });
  let { products, loading } = productsInfo;

  //event handler for add to cart
  let clickAddToCArt = (product) => {
    // Create a new object with updated quantity becouse we could not upate the state before dispatch actions
    const productWithQty = { ...product, qty: 1 };
    dispatch(orderActions.addToCart(productWithQty, navigate));
  };

  //react element
  return (
    <React.Fragment>
      <pre>{JSON.stringify(productsInfo)}</pre>
      {/* heading */}
      <div className="container">
        <div className="">
          <p className="text-gray-600 text-2xl"> New Arrivles</p>
          <p className="text-gray-600 text-sm italic">
            Claritas est etiam processus dynamicus, qui sequitur
          </p>
          <div className="border-2 border-gray-300"></div>
        </div>
      </div>

      {/* product card */}

      <div>
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            {
              <div className="container grid grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
                {products.length > 0 &&
                  products.map((product) => {
                    return (
                      <div className=" relative border-2 border-gray-400 shadow-lg rounded">
                        <Link to={`/product/${product._id}`}>
                          <img src={product.image} alt="" className="w-full" />
                        </Link>
                        <div className="flex justify-between items-center">
                          <div className="ml-4 py-4 text-gray-700">
                            <p className="font-semibold">{product.name}</p>
                            <p className="italic text-sm">
                              <span>&#8377;</span>
                              {product.price} only
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-700 hover:cursor-pointer hover:text-indigo-500 ">
                              <svg
                                onClick={clickAddToCArt.bind(this, product)}
                                className="w-8 h-8 mr-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="absolute top-0  ">
                          <span className=" ">
                            <HiTag size={40} />
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            }
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};
export default KidsWear;
