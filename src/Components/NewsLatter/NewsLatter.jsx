import React from "react";

const NewsLatter = () => {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-4 bg-gradient-to-r from-yellow-100 to-blue-100 shadow-lg rounded-3xl relative mb-[-115px]">
        <div className="p-12">
          <h2 className="mb-4 text-3xl font-bold text-center">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-6 text-lg text-center">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="flex justify-center items-center gap-3">
            <input
              className="input border-0 focus:outline-0"
              type="text"
              placeholder="Enter your email"
            />
            <button className="btn bg-gradient-to-r from-blue-200 to-red-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLatter;
