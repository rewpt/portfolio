import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center w-[700px] bg-slate-200 h-[750px]">
      <h2 className="flex justify-center p-2 border-l-[8px] border-t-[10px] border-t-orange border-l-[orange] bg-white w-full text-5xl col-span-12 mb-0">
        Contact
      </h2>
      <form className="col-span-12  flex flex-col w-full">
        <div className="flex p-2 mb-0 text-2xl border-l-[8px] mr-4 border-t-orange border-l-[orange] form-card bg-white w-full">
          <span className="">First Name:</span>
          <input className="mx-4 flex-grow" type="name" />
        </div>
        <div className="flex p-2 mb-0 text-2xl border-l-[8px] mr-4 border-t-orange border-l-[orange] form-card bg-white w-full">
          <span className="">Last Name:</span>
          <input className="mx-4 flex-grow" type="name" />
        </div>
        <div className="col-start-3 p-2 col-end-11 text-2xl flex border-l-[8px] border-t-orange border-l-[orange] form-card w-full bg-white">
          <span className="">Email:</span>
          <input className="flex-grow mx-4 h-full w-full" type="text" />
        </div>
        <div className="col-start-3 p-2 col-end-11 text-2xl flex flex-col border-l-[8px] border-t-orange border-l-[orange] form-card w-full mb-[30px] h-[300px] bg-white">
          <span className="">Inquiry:</span>
          <input className="h-full w-full mr-4" type="text" />
        </div>
        <button className="self-center text-2xl mb-[40px] row-start-3 row-end-4 rounded-lg h-[50px] w-full bg-[orange]">
          Submit
        </button>
      </form>
    </div>
  );
}
