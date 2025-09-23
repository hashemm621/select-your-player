import React from "react";
import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <>
      <section className="bg-[#040D11]">
        <div className="pt-[200px] max-w-[1200px] mx-auto px-4">
          <img className="mx-auto" src={footerLogo} alt="" />

          <div className="flex flex-col gap-4 md:flex-row justify-between py-16">
            <div>
              <h3 className="font-semibold text-lg text-white">About Us</h3>
              <p className="text-gray-400">
                We are a passionate team <br /> dedicated to providing the best{" "}
                <br /> services to our customers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-white">Quick Links</h3>
              <ul className="list-inside list-disc">
                <li className="text-gray-400">
                  <a href="#">Home</a>
                </li>
                <li className="text-gray-400">
                  <a href="">Services</a>
                </li>
                <li className="text-gray-400">
                  <a href="">About</a>
                </li>
                <li className="text-gray-400">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-white">SubScribe</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the <br /> latest updates.
              </p>
              <div className="flex items-center mt-2">
                <input
                  className="rounded-l-lg input border-0 focus:outline-0 rounded-r-none"
                  type="text"
                  placeholder="Enter your email"
                />
                <button className="btn bg-gradient-to-r from-blue-200 to-red-200 rounded-r-lg rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-center p-8 border-t border-[#123f5599]">
          <p>@2024 Your Company All Rights Reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
