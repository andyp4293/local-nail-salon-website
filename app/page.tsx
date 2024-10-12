"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import homeImage from "./images/homepage_image.png";
import { Carousel } from "flowbite-react";
import "flowbite/dist/flowbite.css";
import carousel1 from "./images/carousel1.jpg";
import carousel2 from "./images/carousel2.jpg";
import carousel3 from "./images/carousel3.jpg";

export default function Home() {
  return (
    <div className="font-sans antialiased">
      {/* Header */}
      <Header />
      <div className="w-full py-1">
        <Carousel style={{ height: "400px" }} className="mt-10">
          <Image
            src={carousel1}
            alt="Carousel Image 1"
            className="object-cover w-full h-full"
          />
          <Image
            src={carousel2}
            alt="Carousel Image 2"
            className="object-cover w-full h-full"
          />
          <Image
            src={carousel3}
            alt="Carousel Image 3"
            className="object-cover w-full h-full"
          />
        </Carousel>
      </div>

      <main className="container mx-auto px-6 ">
        {/* About Us Section */}
        <section className="flex flex-col md:flex-row items-center mt-10">
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
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-10">
            {`Book an Appointment`}
          </h2>

          <div className="flex space-x-4">
            <p>{`Call us at ${process.env.NEXT_PUBLIC_NUMBER}`}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
