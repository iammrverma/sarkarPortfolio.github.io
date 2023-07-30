import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setEmail("");
    setFullName("");
    setMessage("");

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  return (
    <div className="w-full h-full flex justify-center">
      {submitted ? (
        <p>your message is delivered</p>
      ) : (
        <form
          className="w-4/6 h-full 
        flex flex-col  justify-evenly
        formShadow"
          onSubmit={handleSubmit}
        >
          <div className="input-group mt-6">
            <input
              type="text"
              id="fName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input-group__input"
              required
            />
            <label className="input-group__label ml-20 text-4xl">
              FullName
            </label>
          </div>
          <div className="input-group mt-6">
            <input
              type="email"
              id="fEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-group__input"
              required
            />
            <label className="input-group__label ml-20 text-4xl">Email</label>
          </div>
          <div className="input-group mt-6">
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-group__input h-44"
              required
            />
            <label className="input-group__label ml-28 text-4xl">Message</label>
          </div>
          <div>
            <button
              type="submit"
              className="relative inline-flex items-center 
            justify-center p-0.5 mb-2 mr-2 overflow-hidden 
            text-sm font-medium text-gray-900 rounded-lg 
            group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span
                className="relative px-5 py-2.5 transition-all ease-in duration-75
               bg-white dark:bg-gray-900 rounded-md 
               group-hover:bg-opacity-0 text-4xl"
              >
                submit
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
