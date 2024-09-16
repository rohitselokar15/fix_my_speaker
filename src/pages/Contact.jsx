import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen lg:bg-black flex items-center justify-center">
      <div className="bg-gray-200 p-8 mx-2 shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-[25px] font-semibold">Contact Us</h1>
        <p className="text-gray-700 my-2">
          Feel free to reach out in case of any queris or concerns
        </p>

        <form>
          <div className="mt-6">
            {/* <label className="font-semibold">Name</label><br/> */}
            <input
              type="text"
              placeholder="Full Name"
              className="px-2 border w-full py-2 rounded-2xl"
              required
            />
          </div>

          <div className="mt-4">
            {/* <label className="font-semibold">Email</label><br/> */}
            <input
              type="email"
              placeholder="Email"
              className="px-2 border w-full py-2 rounded-2xl"
              required
            />
          </div>

          <div className="mt-4">
            {/* <label className="font-semibold">Message</label><br/> */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="px-2 border w-full py-2 rounded-2xl"
            />
          </div>

          <div className="mt-6">
            <button className="border bg-black text-white p-3 font-semibold px-5 rounded-full w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
