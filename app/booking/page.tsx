"use client"

import Header from "../components/Header";
import Footer from  '../components/Footer';
import React, { useState } from "react";




export default function About() {
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0])



    return (
        <div className="font-sans antialiased">
            <Header />

            <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
                <h2 className="text-3xl font-bold text-center text-teal-600">
                    Book an Appointment
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div>
                            <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                            >
                            Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            placeholder="Enter your name"
                            required
                            />
                        </div>
                        <div>
                            <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                            >
                            Email
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            placeholder="Enter your email"
                            required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                    </div>
                    <div className="space-y-4">
                        <div>
                            <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700"
                            >
                                Select Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="time"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Select Time
                            </label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                required
                            />
                        </div>
                    </div>
                    <div className="md:col-span-2 flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Book Online
                        </button>
                        <a
                            href="tel:7323635929"
                            className="px-6 py-3 bg-white text-teal-600 font-medium rounded-md border border-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            {`Call ${process.env.NEXT_PUBLIC_NUMBER}`}
                        </a>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
    }
