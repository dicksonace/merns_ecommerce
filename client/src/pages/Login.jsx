import React from "react";

const Login = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <form className="bg-white p-4 shadow-md border rounded my-5 py-3">
        <h2 className="text-center w-full p-3 text-gray-500 text-xl font-bold">Login Account</h2>
        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" for="username">
            Username
          </label>
          <input
            type="text"
            placeholder="username"
            id="username"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" for="password">
            Password
          </label>
          <input
            type="text"
            placeholder="password"
            id="password"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
          />
        </div>

        <div className="flex justify-between items-center my-3 mb-5">
          <button className="text-white font-bold bg-blue-500 py-2 px-3 border rounder hover:bg-blue-700">Login</button>
          <a href="#" className=" text-blue-500">forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
