"use client";
import React, { useState } from "react";

function ContactForm() {
  const [result, setResult] = useState(" ");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1607a644-3425-4ec1-9391-1bc9337c4107");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully !");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="bg-white/90 px-6 pb-2 pt-10 shadow-xl md:-ml-8 lg:-ml-0">
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <label className="p-1">
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

        <label className="p-1">
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

        <label className="p-1">
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
          <button className="w-28 rounded-md bg-black/90 py-2 font-medium text-backgroundw hover:scale-[0.96] hover:border-2 hover:border-black/90 hover:bg-backgroundw hover:text-black sm:w-32">
            Submit
          </button>
        </div>
        <span className="text-green-600 mx-auto pt-1">{result}</span>
      </form>
    </div>
  );
}

export default ContactForm;
