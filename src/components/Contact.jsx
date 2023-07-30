import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const Contact = () => {
  const Twitter = <FontAwesomeIcon icon={faTwitter} />;
  const linkd = <FontAwesomeIcon icon={faLinkedin} />;
  const Instagram = <FontAwesomeIcon icon={faInstagram} />;
  const Emails = <FontAwesomeIcon icon={faEnvelope} />;
  const Github = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className="w-screen h-screen  mt-8 flex justify-center flex-col ">
      <div className="w-full h-2/6  flex justify-center items-center flex-col">
        <div className="text-8xl mt-12 font-bold  h-2/6 w-3/6 text-center">
          LET'S GET SOCIAL
        </div>
        <div className="w-3/6 h-4/6 flex text-9xl  justify-around items-center">
          <div
            className="hover:scale-110 transform-gpu 
          transition-all delay-75"
          >
            <a href="https://twitter.com/BEYOND_OP_1243" target="_blank">
              {Twitter}
            </a>
          </div>
          <div
            className="hover:scale-110 transform-gpu 
          transition-all delay-75"
          >
            <a
              href="https://instagram.com/mobasir1243?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              {Instagram}
            </a>
          </div>
          <div
            className="hover:scale-110 transform-gpu 
          transition-all delay-75"
          >
            <a
              href="https://www.linkedin.com/in/abdul-mobasir-sarkar-78026a271"
              target="_blank"
            >
              {linkd}
            </a>
          </div>
          <div
            className="hover:scale-110 transform-gpu 
          transition-all delay-75"
          >
            <a href="mailto:mobasirsarkar3@gmail.com" target="_blank">
              {Emails}
            </a>
          </div>
          <div
            className="hover:scale-110 transform-gpu 
          transition-all delay-75"
          >
            <a href="https://github.com/MobasirSarkar1243" target="_blank">
              {Github}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-4/6 flex justify-center">
        <div className="flex w-3/6 h-full  flex-col">
          <div
            className="w-full h-1/6 
        text-7xl text-center mt-9 font-bold"
          >
            OR MESSAGE ME DIRECTLY
          </div>
          <div className="w-full h-5/6  text-4xl text-center mb-16 ml-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
