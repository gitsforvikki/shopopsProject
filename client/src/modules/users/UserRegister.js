import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as userActions from "../../redux/user/user.action";

let UserRegister = () => {
  let dispatch = useDispatch();
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  //username
  let validateUsername = (event) => {
    setUser({
      ...user,
      name: event.target.value,
    });
    // let regExp = /^[a-zA-Z0-9 ]{4,15}$/;
    // !regExp.test(event.target.value)
    //   ? setUserError({ ...userError, nameError: "Enter proper username" })
    //   : setUserError({ ...userError, nameError: "" });
  };

  //email
  let validateEamil = (event) => {
    setUser({
      ...user,
      email: event.target.value,
    });
    // let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    // !regExp.test(event.target.value)
    //   ? setUserError({ ...userError, emailError: "Enter proper Email" })
    //   : setUserError({ ...userError, emailError: "" });
  };

  //password
  let validatePassword = (event) => {
    setUser({ ...user, password: event.target.value });
    // let regExp = /^[A-Za-z]\w{7,14}$/;
    // !regExp.test(event.target.value)
    //   ? setUserError({ ...userError, passwordError: "Enter a proper Password" })
    //   : setUserError({ ...userError, passwordError: "" });
  };

  const submitUserRegister = (event) => {
    event.preventDefault();
    dispatch(userActions.registerUSer(user));
  };

  return (
    <React.Fragment>
      <pre>{JSON.stringify(user)}</pre>
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center ">
        <div>
          <span className="text-2xl ">Create your account</span>
          <div className="h-2 mt-5 bg-indigo-400 rounded-t-md"></div>
          <div className="shadow-md hover:shadow-2xl">
            <form onSubmit={submitUserRegister} className="px-8 py-6 bg-white">
              {/* Username */}
              <div className="mb-3">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={validateUsername}
                  className=" border px-4 py-2 rounded hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  placeholder="Aditya"
                  required
                />
              </div>
              {/* email */}
              <div className="mb-3">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={validateEamil}
                  className=" border px-4 py-2 rounded hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  placeholder="name@shopops.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label
                  for="Password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Password
                </label>
                <input
                  type="password"
                  id="email"
                  name="password"
                  value={user.password}
                  onChange={validatePassword}
                  className={`w-full border px-4 py-2 rounded hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400  ${
                    userError.passwordError.length > 0 ? "is-invalid" : ""
                  }`}
                  placeholder="********"
                  required
                />
              </div>

              <div className="my-6 flex justify-between items-baseline">
                <button
                  type="submit"
                  className=" bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-indigo-600 hover:shadow-indigo-500 hover:shadow-4lg"
                >
                  Submit
                </button>
                <a href="#" className="text-sm hover:underline">
                  forgot password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserRegister;
