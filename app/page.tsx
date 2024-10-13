"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import aboutImage from "./images/aboutpage_image.png";
import hoursImage from "./images/hours_image.jpg";
import { Carousel } from "flowbite-react";
import "flowbite/dist/flowbite.css";
import carousel1 from "./images/carousel1.jpg";
import carousel2 from "./images/carousel2.jpg";
import carousel3 from "./images/carousel3.jpg";
import carousel4 from "./images/carousel4.jpg";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans antialiased">
      {/* Header */}
      <Header />
      <div className="w-full py-1">
        <Carousel style={{ height: "400px" }} className="mt-10 rounded-none">
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
          <Image
            src={carousel4}
            alt="Carousel Image 4"
            className="object-cover w-full h-full"
          />
        </Carousel>
      </div>

      <main className="container mx-auto px-6 ">
        {/* short about us section */}
        <section className="flex flex-col md:flex-row items-center mt-10">
          {/* about text block */}
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
            <p className="text-lg text-gray-600 mb-6">
              Our team of licensed and highly trained professionals is committed
              to delivering exceptional service. We continually aim to surpass
              your expectations while prioritizing your best interests. Our
              mission is to offer a spa and nail salon you can rely on with
              confidence.
            </p>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-2 text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 transition font-bold"
            >
              Learn more
            </a>
          </div>
          {/* Image Block */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-3">
            <Image
              src={aboutImage}
              alt="Spa nails"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center md:justify-between mt-10">
          {/* about text block */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:mr-3 md:block hidden">
            <Image
              src={hoursImage}
              alt="Spa nails"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col items-center p-10 bg-white md:w-1/2 px-auto">
            <h1 className="text-4xl font-semibold text-teal-600 mb-2">
              {`${process.env.NEXT_PUBLIC_NAME}`}
            </h1>
            <h2 className="text-3xl font-bold mb-4">Business Hours</h2>

            <div className="flex flex-col text-[18px] md:text-[25px] text-center space-y-2 w-full md:w-3/4">
              <div className="flex justify-between w-auto">
                <strong>Monday:</strong>
                <span>9:30 am - 6:00 pm</span>
              </div>
              <div className="flex justify-between w-auto">
                <strong>Tuesday:</strong>
                <span>9:30 am - 6:00 pm</span>
              </div>
              <div className="flex justify-between w-auto">
                <strong>Wednesday:</strong>
                <span>9:30 am - 6:00 pm</span>
              </div>
              <div className="flex justify-between w-auto">
                <strong>Thursday:</strong>
                <span>9:30 am - 6:00 pm</span>
              </div>
              <div className="flex justify-between w-auto">
                <strong>Friday:</strong>
                <span>9:30 am - 6:00 pm</span>
              </div>
              <div className="flex justify-between w-auto">
                <strong>Saturday:</strong>
                <span>9:00 am - 6:30 pm</span>
              </div>
              <div className="flex justify-between w-auto">
                <strong>Sunday:</strong>
                <span>10:00 am - 5:00 pm</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center mt-20">
            {`Book an Appointment`}
          </h2>

          {/* Section Description */}
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
            Experience our professional nail care services. Book your
            appointment now and treat yourself to some pampering.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-gray-700 font-medium">
                Quick and easy booking process
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-gray-700 font-medium">
                Choose your preferred date and time
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-gray-700 text-lg">
              {`Call us at `}
              <span className="font-bold text-gray-900">
                {process.env.NEXT_PUBLIC_NUMBER}
              </span>
              {` or`}
            </p>
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-2 text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 transition font-bold"
            >
              Book Online
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
