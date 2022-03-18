import React from "react";
import useForm from "../hooks/useForm";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("kNMa6f0m-h0S5Tbqc");

export default function Contact() {
  const [firstName, handleFirstName, resetFirstName] = useForm("");
  const [lastName, handleLastName, resetLastName] = useForm("");
  const [email, handleEmail, resetEmail] = useForm("");
  const [inquiry, handleInquiry, resetInquiry] = useForm("");
  const emailParams = { firstName, lastName, email, inquiry };
  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };
  const submit = () => {
    if (firstName && lastName && isValidEmail(email) && inquiry) {
      emailjs
        .send(
          "service_hrb9xqc",
          "template_jteo4tm",
          emailParams,
          "kNMa6f0m-h0S5Tbqc"
        )
        .then(
          (result) => {
            console.log(result.text);
            resetFirstName();
            resetLastName();
            resetEmail();
            resetInquiry();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col justify-center w-[750px] bg-slate-200 h-[750px]"
    >
      <h2 className="flex justify-center p-2 border-l-[8px] border-t-[10px] border-t-orange border-l-[orange] bg-white w-full text-5xl col-span-12 mb-0 drop-shadow-xl">
        Contact
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="col-span-12  flex flex-col w-full"
      >
        <div className="flex p-2 mb-0 text-2xl border-l-[8px] mr-4 border-t-orange border-l-[orange] form-card bg-white w-full drop-shadow-xl">
          <label className="">First Name:</label>
          <input
            onChange={handleFirstName}
            value={firstName}
            autoComplete="off"
            name="firstName"
            className="mx-4 border-b-[2px] focus:outline-none border-b-black focus:border-b-[3px] flex-grow"
            type="name"
          />
        </div>
        <div className="flex p-2 mb-0 text-2xl border-l-[8px] mr-4 border-t-orange border-l-[orange] form-card bg-white w-full drop-shadow-xl">
          <label className="">Last Name:</label>
          <input
            value={lastName}
            onChange={handleLastName}
            autoComplete="off"
            name="lastName"
            className="mx-4 flex-grow border-b-[2px] focus:border-b-[3px] focus:outline-none border-b-black"
            type="name"
          />
        </div>
        <div className="col-start-3 p-2 col-end-11 text-2xl flex border-l-[8px] focus:border-b-[3px] border-t-orange border-l-[orange] form-card w-full bg-white drop-shadow-xl">
          <label className="">Email:</label>
          <input
            value={email}
            onChange={handleEmail}
            autoComplete="off"
            name="email"
            className="flex-grow mx-4 h-full w-full border-b-[2px] focus:border-b-[3px] focus:outline-none border-b-black"
            type="text"
          />
        </div>
        <div className="col-start-3 p-2 col-end-11 text-2xl flex flex-col border-l-[8px] border-t-orange border-l-[orange] form-card w-full mb-[30px] h-[300px] bg-white drop-shadow-xl">
          <label className="">Inquiry:</label>
          <textarea
            value={inquiry}
            onChange={handleInquiry}
            autoComplete="off"
            name="inquiry"
            className="h-full p-1 w-full border-[2px] focus:border-[3px] mb-2 focus:outline-none border-black"
            type="text"
          />
        </div>
        <button
          type="submit"
          value="Send"
          className="self-center hover:scale-[1.1] text-2xl mb-[40px] row-start-3 row-end-4 rounded-lg h-[50px] w-full bg-[orange] drop-shadow-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
