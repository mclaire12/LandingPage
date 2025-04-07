import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-800">
      <h2 className="mb-4 text-4xl font-bold text-center text-indigo-500 dark:text-indigo-400">Contact Us</h2>
      <p className="max-w-2xl mb-12 text-center text-gray-600 dark:text-gray-300">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our business plan? Let us know.
      </p>

      <div className="flex flex-col w-full max-w-6xl gap-8 md:flex-row">
        {/* Form Section */}
        <div className="w-full p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md md:w-2/3">
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium dark:text-white">Your email</label>
              <input
                type="email"
                placeholder="name@yourcompany.com"
                className="w-full p-3 bg-gray-100 dark:bg-gray-600 border rounded-md outline-none dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium dark:text-white">Subject</label>
              <input
                type="text"
                placeholder="Let us know how we can help you"
                className="w-full p-3 bg-gray-100 dark:bg-gray-600 border rounded-md outline-none dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium dark:text-white">Your message</label>
              <textarea
                rows="5"
                placeholder="Leave a comment..."
                className="w-full p-3 bg-gray-100 dark:bg-gray-600 border rounded-md outline-none dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition duration-300 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col w-full gap-6 md:w-1/3">
          <div className="flex items-start p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <FaMapMarkerAlt className="mt-1 mr-4 text-xl text-blue-500 dark:text-blue-400" />
            <div>
              <h4 className="mb-1 font-semibold dark:text-white">Address</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">123 Healthcare St., City, Country</p>
            </div>
          </div>

          <div className="flex items-start p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <FaPhoneAlt className="mt-1 mr-4 text-xl text-blue-500 dark:text-blue-400" />
            <div>
              <h4 className="mb-1 font-semibold dark:text-white">Call Us</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">+123 456 7890</p>
            </div>
          </div>

          <div className="flex items-start p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <FaEnvelope className="mt-1 mr-4 text-xl text-blue-500 dark:text-blue-400" />
            <div>
              <h4 className="mb-1 font-semibold dark:text-white">Email</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">support@yourcompany.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
