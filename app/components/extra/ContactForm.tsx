"use client";
import React, { useState } from "react";

function ContactForm() {
  const [result, setResult] = useState(" ");

  async function onSubmit(e: any) {
    e.preventDefault();
    setResult("Sending....");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "e3a3a346-5ea1-479d-99f4-dfd6bc6f98d1",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setResult("Form Submitted Successfully !");
      e.target.reset();
    } else {
      console.log("Error", result);
      setResult(result.message);
    }
  }
  return (
    <div className="bg-white/90 px-6 pb-2 pt-10 shadow-xl md:-ml-8 lg:-ml-0">
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <label htmlFor="name" className="p-1">
          <h6 className="pb-1 font-semibold text-black/90">
            Name<span className="text-lg text-red-700">*</span>
          </h6>
          <input
            type="text"
            name="name"
            className="w-[95%] rounded-md border border-black/50 bg-transparent py-4 pl-2"
            placeholder="John"
            required
          />
        </label>

        <label htmlFor="email" className="p-1">
          <h6 className="pb-1 font-semibold text-black/90">
            Email<span className="text-lg text-red-700">*</span>
          </h6>
          <input
            type="email"
            name="email"
            className="w-[95%] rounded-md border border-black/50 bg-transparent py-4 pl-2"
            placeholder="JohnDoe4@gmail.com"
            required
          />
        </label>

        <label htmlFor="message" className="p-1">
          <h6 className="pb-1 font-semibold text-black/90">
            Message<span className="text-lg text-red-700">*</span>
          </h6>
          <textarea
            className="w-[95%] rounded-sm border border-black/50 bg-transparent pb-14 pl-2 pt-2"
            placeholder="Enter Message Here"
            name="message"
          />
        </label>
        <div className="mx-auto flex justify-center">
          <button
            type="submit"
            className="w-28 rounded-md bg-black/90 py-2 font-medium text-backgroundw hover:scale-[0.96] hover:border-2 hover:border-black/90 hover:bg-backgroundw hover:text-black sm:w-32"
          >
            Submit
          </button>
        </div>
        <span className="mx-auto pt-1 text-green">{result}</span>
      </form>
    </div>
  );
}

export default ContactForm;
