import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
      ></img>

      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-sm">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded-sm bg-gray-800"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded-sm bg-gray-800"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-sm bg-gray-800"
        ></input>
        {isSignInForm ? (
          <button className="p-2 my-4 bg-red-600 w-full rounded-sm">
            Sign In
          </button>
        ) : (
          <button className="p-2 my-4 bg-red-600 w-full rounded-sm">
            Sign Up
          </button>
        )}
        {!isSignInForm && (
          <p onClick={toggleSignInForm}>Already Registered? Sign In now.</p>
        )}
        {isSignInForm && (
          <p onClick={toggleSignInForm}>New to Netflix? Sign Up now </p>
        )}
      </form>
    </div>
  );
};

export default Login;
