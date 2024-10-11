import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import homeImage from "./images/homepage_image.png";

export default function Home() {
  return (
    <div className="font-sans antialiased">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-6 py-12">
        {/* About Us Section */}
        <section className="flex flex-col md:flex-row items-center">
          {/* Text Block */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {`Welcome to ${process.env.NEXT_PUBLIC_NAME}`}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {`Located conveniently in ${process.env.NEXT_PUBLIC_ADDRESS}, ABC
              Nails is committed to bringing you the best moment ever. Ensuring
              high-quality service and professionalism, our nail salon
              guarantees to do our very best every time to make our customers
              happy.`}
            </p>
            <p className="text-lg text-gray-600">
              Our team of licensed and highly trained professionals is committed
              to delivering exceptional service. We continually aim to surpass
              your expectations while prioritizing your best interests. Our
              mission is to offer a spa and nail salon you can rely on with
              confidence.
            </p>
          </div>
          {/* Image Block */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-3">
            <Image
              src={homeImage}
              alt="Spa nails"
              className="rounded-lg shadow-lg"
            />
            {/* Floating Contact Icons */}
            <div className="absolute right-6 bottom-6 flex flex-col space-y-4">
              <button className="bg-pink-500 text-white p-3 rounded-full shadow-lg">
                📞
              </button>
              <button className="bg-pink-500 text-white p-3 rounded-full shadow-lg">
                📅
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
