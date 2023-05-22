import {BsGithub} from 'react-icons/bs';
import {FaMobileAlt, FaLaptopCode} from 'react-icons/fa'
import {DiCodeigniter} from 'react-icons/di';

function Projects() {
  return (
    <section className="md:mt-44 mt-20" id="projects">
      <div className="flex justify-center text-2xl"> <FaMobileAlt/> &nbsp; &nbsp; Projects &nbsp; &nbsp; <FaLaptopCode/></div>
      <div className="mt-10 mx-auto md:w-5/6 w-3/5 items-center justify-center md:flex md:space-x-20 md:h-5/6 md:space-y-0 space-y-10">

    <div className="flex-col ">
    <b className="flex justify-center">Tetlier - E-commerce Application (SERN Stack)</b>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZCVLZYF9RuU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <p>A e-commerce attire website that features a product overview, ability to add products to a cart, a reviews section, and a question-and-answers section. The information is pulled from an API database.</p>
    <div className="flex justify-center"><button className=" bg-white text-black rounded-full white hover:text-blue-500"><BsGithub size = '3em' onClick = {()=>{window.location.href = "https://github.com/Tetlier/Atelier";}}> </BsGithub></button></div>
    </div>
    
    <div className="flex-col">
    <b className="flex justify-center">Lucky Larry's - Gambling Application (MERN Stack)</b>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/LCbKeZh7iZg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <p>A gambling application featuring roulette, slots, and scratch tickets, as well as user balance required to play the games, global score, chat, and private messaging. </p>
    <div className="flex justify-center"><button className=" bg-white text-black rounded-full white hover:text-blue-500"><BsGithub size = '3em' onClick = {()=>{window.location.href = "https://github.com/Luck-Larry/LUCKY-LARRY-S";}}></BsGithub></button></div>
    </div>
    
    
    <div className="flex-col">
    <b className="flex justify-center">SaveUp - Finance Application (MERN Stack)</b>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/I3Sfr0sU-4M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <p>A finance manager app that features a balance sheet with deposits and withdrawals to enter, a job board to submit/look for work, and a sign-up/login system with password authentication to access an account.</p>
    <div className="flex justify-center"><button className="bg-white text-black rounded-full white hover:text-blue-500"><BsGithub size = '3em' onClick = {()=>{window.location.href = "https://github.com/Jesse132/SaveUp";}}></BsGithub></button></div>
    </div>
    </div>

    <h2 className="flex justify-center mt-20 text-2xl"> <DiCodeigniter className="text-orange-500"/> &nbsp;&nbsp;Upcoming Projects &nbsp;&nbsp;<DiCodeigniter className="text-orange-500"/></h2>
    
    <div  className="mt-10 mx-auto md:w-5/6 w-3/5 items-center justify-center md:flex md:space-x-20 md:h-1/2 md:space-y-0 space-y-10">
      <div className="flex-col">
    <b className="flex justify-center">Endless Adventure (React Native)</b>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/HYi96k_4Kto" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <p>A passion project endless RPG adventure game that is planned to be released on the App store at some point!</p>
    </div>

    <div className="flex-col">
    <b className="flex justify-center">Portfolio Website (TypeScript, Tailwind)</b>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/nRLOl6rkHNg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <p>Portfolio website that displays all my current work. Currently working on a mobile friendly version with a dedicated layout.</p>
    </div>

    </div>
    </section>
  )
}

export default Projects