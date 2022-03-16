import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center bg-slate-200 h-[50vh]">
      <h2 className="text-5xl mb-[50px] mt-[50px]">Contact</h2>
      <form className="flex flex-col">
        <div className="flex flex-col border-t-4 border-orange rounded-md drop-shadow-xl form-card h-[50px] mb-[30px] w-[300px] bg-white">
          <span className="">Your Name:</span>
          <input type="name" />
        </div>
        <span className="">
          Email: <input className="mb-[30px] w-[500px] " type="email" />{" "}
        </span>
        <span className="flex no-wrap mb-[50px] max-w-[300px] overflow-hidden">
          Inquiry: <input className="w-[1000px]" type="email" />{" "}
        </span>

        <button className="rounded-lg h-[40px] w-[80px] bg-orange">
          Submit
        </button>
      </form>
    </div>
  );
}
