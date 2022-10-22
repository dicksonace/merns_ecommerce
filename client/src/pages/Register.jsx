import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <form className="bg-white p-4 shadow-md border rounded my-5 py-3">
        <h2 className="text-center w-full p-3 text-gray-500 text-xl font-bold">
          Register Account
        </h2>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" for="firstname">
            Firstname
          </label>
          <input
            type="text"
            placeholder="username"
            id="firstname"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" for="surname">
            Surname
          </label>
          <input
            type="text"
            placeholder="Surname"
            id="surname"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>
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
          <label className="text-gray-500 mb-2 font-bold" for="email">
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            id="email"
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

        <div className="mb-2">
          <label
            className="text-gray-500 mb-2 font-bold"
            for="confirm_password"
          >
            Confirm Password
          </label>
          <input
            type="text"
            placeholder="Confirm Password"
            id="confirm_password"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
          />
        </div>

        <div className="flex flex-col justify-between items-center my-3 mb-5">
          <button className="text-white font-bold bg-blue-500 py-2 px-3 border rounder hover:bg-blue-700">
            Register
          </button>
          {/* <Link to="/login" className="text-blue-500"><p>Already have an account</p></Link> */}
        </div>
      </form>
    </div>
  );
};

export default Register;
