import React from 'react'

const About = () => {
  return (
    <div className='w-screen h-screen mt-9 
    flex justify-center'>
      <div className='text-8xl mt-8 font-bold w-screen h-24
      justify-center  text-center absolute'>Passion Fuels Purpose</div>
      <div className='w-screen h-5/6 mt-44
      flex'>
      <div className='w-3/5 h-full flex-1'>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
          <p className='text-7xl text-black font-bold 
       mt-5 ml-8'>ABOUT</p>
        <p className='text-7xl text-white font-bold 
       mt-5 ml-8'>ME</p>
          </div>
        <div className='text-6xl text-white font-medium
       mt-6 ml-12'>Hi,My Name Is Abdul Mobasir Sarkar</div>
        </div>
        <div className='mt-8 ml-7 w-4/5 flex flex-col
        text-5xl divText'>
         <p className='text-black font-semibold text-50px ml-28 mb-4'>I'm a passionate web app developer with a 
          strong enthusiasm for creating seamless digit experience.</p>
         <p className='text-black font-semibold text-50px ml-28 mb-4'>Currently,I'm in the Final year of my BCA(Bachelor of Computer Applications)program , 
          and i couldn't be more thrilled about the journey so far.</p>
         <p className='text-black font-semibold text-50px ml-28 mb-4'>My curiosity and drive to stay up-to-date with the latest web technologies have led me to explore frameworks like React,empowering me to craft dynamic and responsive applications that truly engage users.</p>
         <p className='text-black font-semibold text-50px ml-28 mb-4'>In addition,to technical skills,l value clean code practices,and priotize creating maintainable and scable importance of user-centric design and strive to ensure that my applications not only function flawlessly but also provide an intuitive and visually appealing experience.</p>
         <p className='text-black font-semibold text-50px ml-28 mb-4'>Thank you for considering me , and I'm exicted to embark on the next chapter of my journey as a web app developer!</p>
        </div>
      </div>
      <div className='w-2/5 h-full logoA flex'>
        <img src="src/images/LogoABoutwithNOBg1.png" alt=""
        className='logoAbout'/>
      </div>
      </div>
    </div> 
  )
}

export default About
