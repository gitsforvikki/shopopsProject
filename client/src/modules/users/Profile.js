import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userReducer from "../../redux/user/user.reducer";
import Spinner from "../../util/spinner";
import * as userActions from "../../redux/user/user.action";

import avatar from "../../assets/profile/viki.jpeg";
let Profile = () => {
  let dispatch = useDispatch();

  let [enableAddress, setEnableAddress] = useState(false);

  // Get User Info from the REDUX Store
  let userInfo = useSelector((state) => {
    return state[userReducer.userFeaturesKey];
  });

  let { loading, user } = userInfo;

  let [address, setAddress] = useState({
    flat: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    mobile: "",
  });

  useEffect(() => {
    setAddress({
      flat: user && user.address ? user.address.flat : "",
      street: user && user.address ? user.address.street : "",
      landmark: user && user.address ? user.address.landmark : "",
      city: user && user.address ? user.address.city : "",
      state: user && user.address ? user.address.state : "",
      country: user && user.address ? user.address.country : "",
      pin: user && user.address ? user.address.pin : "",
      mobile: user && user.address ? user.address.mobile : "",
    });
    //dispatch(userActions.getUSer());
  }, [user]);

  let updateInputAddress = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            {Object.keys(user).length > 0 && (
              <React.Fragment>
                <div className="container">
                  <div className="relative">
                    <div
                      className=" min-w-full py-20 flex flex-col justify-center  rounded-t-md
                 items-center bg-gradient-to-t from-violet-700 to-fuchsia-600 text-white "
                    >
                      <img
                        src={avatar}
                        alt=""
                        className="w-32 h-32 rounded-full "
                      />
                    </div>
                    <div className="absolute -bottom-11  min-w-full">
                      <div className=" mx-6 py-4 lg:py-6 flex flex-row justify-evenly bg-gray-300 rounded-t-md">
                        {/* orders */}
                        <div className="flex flex-col gap-y-1 ">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                              />
                            </svg>
                          </span>
                          <span>My Orders</span>
                        </div>
                        {/* Cart */}
                        <div className="flex flex-col gap-y-1">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                              />
                            </svg>
                          </span>
                          <span>My Cart</span>
                        </div>
                        {/* Notification */}
                        <div className="flex flex-col gap-y-1">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                              />
                            </svg>
                          </span>
                          <span>Notification</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Your information */}
                  <div className=" grid  lg:grid-cols-3 gap-x-4 gap-y-4 mt-20 ">
                    <div className="bg-blue-100">
                      <div className="bg-blue-500 text-white py-2 text-xl px-3 rounded-t-md">
                        <p>Full Name</p>
                      </div>
                      <div className="py-2 px-6">
                        <p>{user.name}</p>
                      </div>
                    </div>

                    <div className="bg-blue-100">
                      <div className="bg-blue-500 text-white py-2 px-3 text-xl rounded-t-md">
                        <p>Your Email</p>
                      </div>
                      <div className="py-2 px-6">
                        <p>{user.email}</p>
                      </div>
                    </div>

                    <div className="bg-blue-100">
                      <div className="bg-blue-500 text-white py-2 px-3 text-xl rounded-t-md">
                        <p> Your Mobile</p>
                      </div>
                      <div className=" py-2 px-6">
                        <p>+91 {user.address && user.address.mobile}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>

      {/* address update  */}
      <div className="container ">
        <div className="border-b border-slate-500 py-4">
          <div className="bg-violet-400 py-4 px-4 rounded-t-lg">
            Update Your Address{" "}
          </div>
          <form className="flex flex-col gap-y-2">
            <div>
              <input
                type="text"
                name="flat"
                value={address.flat}
                onChange={updateInputAddress}
                className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                placeholder="Flat"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={updateInputAddress}
                className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                placeholder="Street"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="landmark"
                value={address.landmark}
                onChange={updateInputAddress}
                className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                placeholder="Landmart"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={updateInputAddress}
                className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                placeholder="City"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={updateInputAddress}
                className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                placeholder="State"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="country"
                value={address.country}
                onChange={updateInputAddress}
                className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                placeholder="Country"
                required
              />
            </div>
            <div>
              <input
                type="number"
                name="pin"
                value={address.pin}
                onChange={updateInputAddress}
                className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                placeholder="Pin"
                required
              />
            </div>

            <div>
              <input
                type="number"
                name="mobile"
                value={address.mobile}
                onChange={updateInputAddress}
                className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                placeholder="Mobile"
                required
              />
            </div>
            <div>
              <input type="submit" value="Update" className="bg-slate-500" />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
