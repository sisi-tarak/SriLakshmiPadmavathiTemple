import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcDiscover,
  FaCcAmex,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa";

const handleGooglePay = () => {
  console.log("Initiating Google Pay payment");
};

const handleAmex = () => {
  console.log("Initiating American Express payment");
};

const handleDiscover = () => {
  console.log("Initiating Discover payment");
};

const handleStripe = () => {
  console.log("Initiating Stripe payment");
};

const handleApplePay = () => {
  console.log("Initiating Apple Pay payment");
};

const handleVisa = () => {
  console.log("Initiating Visa payment");
};

const handleMastercard = () => {
  console.log("Initiating Mastercard payment");
};

const handlePaypal = () => {
  console.log("Initiating PayPal payment");
};

const Footer = () => {
  return (
    <footer className="w-full rounded-md bg-black text-white py-8 px-4 font-montserrat">
      <Container maxWidth="lg" className="container mx-auto">
        <div className="grid grid-cols-2 lg:items-center lg:grid-cols-5 xl:grid-cols-6 lg:gap-8">
          <div className="col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-2 md:mb-6 mx-auto">
            <div className="flex flex-row lg:flex-col xl:flex-row justify-center md:justify-start items-start gap-x-5 w-full mb-4 text-sm xs:text-base">
              <p className="font-bold mb-2 w-1/3 lg:w-full xl:w-1/3">
                Address:
              </p>
              <p className="text-white w-2/3 lg:w-full xl:w-2/3">
                123 Fairway Lane Golftown,
                <br />
                Golfshire 56789 United States
              </p>
            </div>
            <div className="flex flex-row lg:flex-col xl:flex-row justify-start items-start gap-x-5 w-full text-sm xs:text-base">
              <p className="font-bold mb-2 w-1/3 lg:w-full xl:w-1/3">
                Phone No:
              </p>
              <p className="text-white w-2/3 lg:w-full xl:w-2/3">
                +91 9655214532
              </p>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-2 xl:col-span-2 grid grid-cols-2 gap-4 xs:gap-10 sm:gap-20 lg:gap-x-5 mx-auto xl:w-full my-3 xs:my-6 lg:my-0">
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h3 className="xs:text-lg sm:text-xl font-bold mb-6">
                Quick Link
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="#"
                    className="text-sm sm:text-base text-white hover:text-white/80 transition-all duration-100 ease-in-out"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm sm:text-base text-white hover:text-white/80 transition-all duration-100 ease-in-out"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm sm:text-base text-white hover:text-white/80 transition-all duration-100 ease-in-out"
                  >
                    Featured Articles
                  </Link>
                </li>
                <li>
                  <Link to="#" className="inline-block mt-3">
                    <button className="text-white px-8 py-2 bg-gradient-to-r from-[#f2e496] via-[#b3892d] to-[#ba983c] rounded-full hover:from-[#ba983c] hover:to-[#b3892d] transition-all duration-500 ease-in-out">
                      Donate
                    </button>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h3 className="xs:text-lg sm:text-xl font-bold mb-6">
                Help & Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="#"
                    className="text-sm sm:text-base text-white hover:text-white/80 transition-all duration-100 ease-in-out"
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm sm:text-base text-white hover:text-white/80 transition-all duration-100 ease-in-out"
                  >
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm sm:text-base text-white hover:text-white/80 transition-all duration-100 ease-in-out"
                  >
                    Site Map
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm sm:text-base text-white hover:text-white/80 transition-all duration-100 ease-in-out"
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm sm:text-base text-white hover:text-white/80 transition-all duration-100 ease-in-out"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-2 md:w-[80%] lg:w-full mx-auto xl:w-full my-6 lg:my-0">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Sign Up To Newsletter
            </h3>
            <div className="flex flex-col">
              <div className="relative w-full mt-5">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent text-white text-3xl sm:text-4xl font-light pb-2 pt-0 px-0 border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <img src="" alt="Submit" className="w-8 h-8 cursor-pointer" />
                </div>
              </div>

              <div className="mt-10">
                <p className="text-white text-lg sm:text-xl font-bold mb-4">
                  Payment By:
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleGooglePay}
                    className="bg-white rounded-md p-1 h-8 w-10 flex items-center justify-center hover:opacity-80"
                  >
                    <FaGooglePay size={30} className="text-gray-700" />
                  </button>

                  <button
                    onClick={handleAmex}
                    className="bg-blue-600 rounded-md p-1 h-8 w-10 flex items-center justify-center hover:opacity-80"
                  >
                    <FaCcAmex size={30} className="text-white" />
                  </button>

                  <button
                    onClick={handleDiscover}
                    className="bg-gray-700 rounded-md p-1 h-8 w-10 flex items-center justify-center hover:opacity-80"
                  >
                    <FaCcDiscover size={30} className="text-white" />
                  </button>

                  <button
                    onClick={handleStripe}
                    className="bg-white rounded-md p-1 h-8 w-10 flex items-center justify-center hover:opacity-80"
                  >
                    <FaCcStripe size={30} className="text-purple-500" />
                  </button>

                  <button
                    onClick={handleApplePay}
                    className="bg-white rounded-md p-1 h-8 w-10 flex items-center justify-center hover:opacity-80"
                  >
                    <FaApplePay size={30} className="text-black" />
                  </button>

                  <button
                    onClick={handleVisa}
                    className="bg-blue-800 rounded-md p-1 h-8 w-10 flex items-center justify-center hover:opacity-80"
                  >
                    <FaCcVisa size={30} className="text-white" />
                  </button>

                  <button
                    onClick={handleMastercard}
                    className="bg-white rounded-md p-1 h-8 w-10 flex items-center justify-center hover:opacity-80"
                  >
                    <FaCcMastercard size={30} className="text-red-500" />
                  </button>

                  <button
                    onClick={handlePaypal}
                    className="bg-white rounded-md p-1 h-8 w-10 flex items-center justify-center hover:opacity-80"
                  >
                    <FaCcPaypal size={30} className="text-blue-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondaryColor mt-8 pt-4 text-center text-white">
          <p className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-x-1 text-sm">
            <span className="font-semibold">
              Copyright 2025 Sipptempletpt.org
            </span>{" "}
            <span>All Rights Reserved.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
