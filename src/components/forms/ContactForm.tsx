import React from 'react';

export default function ContactForm() {
  return (
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSfhYarohZVc0VKS_nLTYAV6ESKNEiIrLBODA6OpsOSUd7XMHg/formResponse"
      method="POST"
      target="_blank" // Open form submission in a new window
      className="max-w-lg mx-auto p-6 bg-white shadow-md border border-black"
    >
      {/* Title Section */}
      <h1 className="text-3xl font-bold mb-4 text-black">Contact Texalist</h1>
      <p className="text-lg text-black mb-6">Use this form to contact us or report information</p>

      {/* Message Field */}
      <label htmlFor="message" className="block text-sm font-medium text-black">
        Message <span className="text-gray-500">(Max: 500 characters)</span>
      </label>
      <textarea
        id="message"
        name="entry.2072461180"
        rows={4}
        maxLength={500}
        className="w-full p-3 bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-black hover:border-l-[4px] hover:border-l-[#e22441] transition"
        placeholder="Message text"
      ></textarea>

      {/* Email Field */}
      <label htmlFor="email" className="block text-sm font-medium text-black mt-4">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        id="email"
        name="entry.1045781291"
        type="email"
        required
        className="w-full p-3 bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-black hover:border-l-[4px] hover:border-l-[#e22441] transition"
        placeholder="user@email.com"
      />

      {/* Full Name Field */}
      <label htmlFor="fullName" className="block text-sm font-medium text-black mt-4">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        id="fullName"
        name="entry.1464337929"
        type="text"
        required
        className="w-full p-3 bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-black hover:border-l-[4px] hover:border-l-[#e22441] transition"
        placeholder="First and last name"
      />

      {/* Phone Number Field */}
      <label htmlFor="phoneNumber" className="block text-sm font-medium text-black mt-4">
        Phone Number <span className="text-red-500">*</span>
      </label>
      <input
        id="phoneNumber"
        name="entry.1166974658"
        type="tel"
        required
        className="w-full p-3 bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-black hover:border-l-[4px] hover:border-l-[#e22441] transition"
        placeholder="Country code + Number"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full bg-[#e22441] text-white py-3 hover:bg-red-600 transition"
      >
        Send
      </button>
    </form>
  );
}
