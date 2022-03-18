import React from "react";
import useForm from "../hooks/useForm";

export default function Contact() {
  const [firstName, handleFirstName, resetFirstName] = useForm("");
  const [lastName, handleLastName, resetLastName] = useForm("");
  const [email, handleEmail, resetEmail] = useForm("");
  const [inquiry, handleInquiry, resetInquiry] = useForm("");
  return (
    <div className="flex flex-col justify-center w-[750px] bg-slate-200 h-[750px]">
      <h2 className="flex justify-center p-2 border-l-[8px] border-t-[10px] border-t-orange border-l-[orange] bg-white w-full text-5xl col-span-12 mb-0">
        Contact
      </h2>
      <form
        onSubmit={() => {
          resetFirstName();
          resetLastName();
          resetEmail();
          resetInquiry();
        }}
        className="col-span-12  flex flex-col w-full"
      >
        <div className="flex p-2 mb-0 text-2xl border-l-[8px] mr-4 border-t-orange border-l-[orange] form-card bg-white w-full">
          <span className="">First Name:</span>
          <input
            onChange={handleFirstName}
            value={firstName}
            className="mx-4 border-b-[2px] focus:outline-none border-b-black flex-grow"
            type="name"
          />
        </div>
        <div className="flex p-2 mb-0 text-2xl border-l-[8px] mr-4 border-t-orange border-l-[orange] form-card bg-white w-full">
          <span className="">Last Name:</span>
          <input
            value={lastName}
            onChange={handleLastName}
            className="mx-4 flex-grow border-b-[2px] focus:outline-none border-b-black"
            type="name"
          />
        </div>
        <div className="col-start-3 p-2 col-end-11 text-2xl flex border-l-[8px] border-t-orange border-l-[orange] form-card w-full bg-white">
          <span className="">Email:</span>
          <input
            value={email}
            onChange={handleEmail}
            className="flex-grow mx-4 h-full w-full border-b-[2px] focus:outline-none border-b-black"
            type="text"
          />
        </div>
        <div className="col-start-3 p-2 col-end-11 text-2xl flex flex-col border-l-[8px] border-t-orange border-l-[orange] form-card w-full mb-[30px] h-[300px] bg-white">
          <span className="">Inquiry:</span>
          <input
            value={inquiry}
            onChange={handleInquiry}
            className="h-full w-full border-[2px] mb-2 focus:outline-none border-black"
            type="text"
          />
        </div>
        <button className="self-center text-2xl mb-[40px] row-start-3 row-end-4 rounded-lg h-[50px] w-full bg-[orange]">
          Submit
        </button>
      </form>
    </div>
  );
}
