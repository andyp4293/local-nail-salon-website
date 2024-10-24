"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ref, set } from "firebase/database";
import { database } from "../firebaseConfig";

export default function About() {
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [time, setTime] = useState<string>("09:30");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // Disable past dates
  const today = new Date().toISOString().split("T")[0];

  const generateTimeOptions = () => {
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getUTCDay(); // 0 = Sunday, 6 = Saturday
    let options = [];

    if (dayOfWeek === 0) {
      // Sunday - Closed, no time options
      return options;
    }

    let startHour = 9;
    let endHour = 18;
    let startMinute = 0;

    if (dayOfWeek === 6) {
      // Saturday: 9:00 AM to 4:00 PM
      endHour = 16;
    } else {
      // Monday to Friday: 9:30 AM to 6:00 PM
      startMinute = 30;
    }

    for (let hour = startHour; hour < endHour; hour++) {
      for (
        let minute = hour === startHour ? startMinute : 0;
        minute < 60;
        minute += 15
      ) {
        const hourString = hour.toString().padStart(2, "0");
        const minuteString = minute.toString().padStart(2, "0");
        options.push(`${hourString}:${minuteString}`);
      }
    }

    return options;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Define the appointment data
    const appointmentData = {
      name,
      email,
      phone,
      date,
      time,
    };

    try {
        await set(ref(database, `appointments/${Date.now()}`), appointmentData);
        alert("Appointment booked successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setDate(new Date().toISOString().split("T")[0]); // Reset to today's date
        setTime("09:30");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment.");
    }
  };

  return (
    <div className="font-sans antialiased">
      <Header />

      <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
        <h2 className="text-3xl font-bold text-center text-teal-600">
          Book an Appointment
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                min={today} // Restrict past dates
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
              <select
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                required
              >
                {generateTimeOptions().map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center space-x-4">
            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Book Online
            </button>
            <div
              className="px-6 py-3 bg-white text-teal-600 font-medium rounded-md border border-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              {`Call ${process.env.NEXT_PUBLIC_NUMBER}`}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
