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
    <div className="flex justify-center w-full bg-slate-200 py-[3rem]">
      <div className="w-[90%] max-w-[800px] flex justify-center items-center">
        <div
          id="contact"
          className="flex flex-col justify-center w-full bg-slate-200"
        >
          <h2 className="contact-h2">Contact</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="flex flex-col w-full"
          >
            <div className="form-container">
              <label className="form-label">First Name:</label>
              <input
                onChange={handleFirstName}
                value={firstName}
                autoComplete="off"
                name="firstName"
                className="form-input"
                type="name"
              />
            </div>
            <div className="form-container">
              <label className="form-label">Last Name:</label>
              <input
                value={lastName}
                onChange={handleLastName}
                autoComplete="off"
                name="lastName"
                className="form-input"
                type="name"
              />
            </div>
            <div className="form-container">
              <label className="form-label">Email:</label>
              <input
                value={email}
                onChange={handleEmail}
                autoComplete="off"
                name="email"
                className="form-input"
                type="text"
              />
            </div>
            <div className="inquiry-container">
              <label className="form-label">Inquiry:</label>
              <textarea
                value={inquiry}
                onChange={handleInquiry}
                autoComplete="off"
                name="inquiry"
                className="form-text"
                type="text"
              />
            </div>
            <button type="submit" value="Send" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
