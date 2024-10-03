// App.tsx
import React from 'react';

function App() {
  return (
    <div className="font-sans antialiased">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-teal-600">
            ABC Nails
          </div>
          <nav className="space-x-6">
            <a href="#" className="text-gray-800 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-green-600">About Us</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Services</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Booking</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Gallery</a>
            <a href="#" className="text-green-600 font-semibold">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Us Section */}
        <section className="flex flex-col md:flex-row items-center">
          {/* Text Block */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to ABC Nails</h2>
            <p className="text-lg text-gray-600 mb-6">
              Located conveniently in Robbinsville Twp, New Jersey 08691, Best Spa & Nails is committed to bringing you the best moment ever. Ensuring high-quality service and professionalism, our nail salon guarantees to do our very best every time to make our customers happy.
            </p>
            <p className="text-lg text-gray-600">
              Our licensed, well-trained staff is dedicated to providing you with the highest level of service. We are constantly striving to exceed your needs while respecting your best interest. Our goal is to provide a spa and nail salon you can trust.
            </p>
          </div>

          {/* Image Block */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://source.unsplash.com/500x500/?nails,spa"
              alt="Spa nails"
              className="rounded-lg shadow-lg"
            />
            {/* Floating Contact Icons */}
            <div className="absolute right-6 bottom-6 flex flex-col space-y-4">
              <button className="bg-green-500 text-white p-3 rounded-full shadow-lg">
                📞
              </button>
              <button className="bg-green-500 text-white p-3 rounded-full shadow-lg">
                📅
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
