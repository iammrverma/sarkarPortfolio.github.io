import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
     const resume= <FontAwesomeIcon icon={faArrowUpRightFromSquare} beat 
     style={{height:'30px',marginLeft:'10px',}}/>;
     const resumeFileName = 'http://localhost:5173/src/pdf/resume.pdf'
     const downloadFileAtURl = (url) =>{
          const fileName = url.split('/src').pop();
          const aTag = document.createElement("a");
          aTag.href = url;
          aTag.setAttribute("download",fileName);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
     }
  return (
    <div>
      <button onClick={()=>{downloadFileAtURl(resumeFileName)}}
      className='bg-white text-black h-24 w-72 text-5xl rounded-xl border-2 border-black
       hover:text-white hover:bg-black hover:scale-105 delay-100 transform-gpu transition-all
       ease in out ml-8 mt-8'>
          resume{resume}
      </button>
    </div>

  )
}

export default Resume

