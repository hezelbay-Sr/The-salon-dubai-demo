"use client";

import { useState } from "react";

export type CustomerInfo = {
  name: string;
  phone: string;
  email: string;
};

export default function CustomerInfoStep({
  onSubmit,
}: {
  onSubmit: (info: CustomerInfo) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const isValid = name.trim() !== "" && phone.trim() !== "" && email.trim() !== "";

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-1">Your Details</h2>
      <p className="text-gray-400 text-sm mb-6">
        Almost there — just a few details to confirm your booking.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Sarah Ahmed"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +971 50 123 4567"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. sarah@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
          />
        </div>
      </div>

      <button
        onClick={() => { if (isValid) onSubmit({ name: name.trim(), phone: phone.trim(), email: email.trim() }); }}
        disabled={!isValid}
        className={`cursor-pointer w-full mt-6 py-3 rounded-full font-medium text-sm transition-colors ${
          isValid
            ? "bg-pink-500 text-white hover:bg-pink-600"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        Confirm Booking
      </button>
    </div>
  );
}
