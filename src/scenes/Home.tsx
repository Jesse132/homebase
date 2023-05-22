import mephoto from'@/images/mephoto.png';
import { useState } from 'react';
import {FaTools} from 'react-icons/fa';
import {AiFillSmile} from 'react-icons/ai';
import { useSpring, animated, config } from 'react-spring';

const Home = () => {

  const Welcome = (delayTime: number, msg: string) => {
    const [flip] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      reverse: flip,
      delay: delayTime,
      config: config.molasses
    })
    return <animated.h2 style={props}>{msg}</animated.h2>
  }

  return (
    <section id="home"
    className="md:gap-16 py-10 md:h-full md:pb-0 relative">
    <div className="mt-24 mx-auto md:w-5/6 w-3/5 items-center justify-center md:flex md:h-5/6">
    <div><img src={mephoto} className=" md:scale-90 scale-95 md:w-auto w-3/5"></img></div>
    <div className="md:ml-20 md:z-10 md:mt-32 md:basis-3/5">
      <div className="flex-col mb-20 gap-16">
      <div className="md:text-5xl text-2xl md:static absolute right-32 top-44">Hi there, I'm Jesse.</div>
    <div className="md:text-2xl text-lg md:static absolute right-40 top-56 md:w-full w-28">{Welcome(500, 'Thanks for visiting my website!')}</div>
      </div>
    <div className="md: flex text-2xl"> <FaTools className="h-6 w-6"/> &nbsp;&nbsp;About Me</div>
    <p>I'm a Full-Stack Software developer located in Vancouver. I recently graduated from Hack Reactor's immersive software development program and am looking to start my journey! I became interested in the world of coding after an introduction to Computer Sciences course in my last year at the University of British Columbia, I've now decided to make the switch from Biology to Software Development.</p>
    <div className="md: mt-20">
    <div className="md: flex text-2xl"> <AiFillSmile className="h-6 w-6"/> &nbsp;&nbsp;ToolBox </div>
    <p> Frontend: JavaScript, TypeScript, React, CSS, HTML5, jQuery<br />
    Backend: Node.js, Express, MySQL, PostgreSQL, MongoDB, RESTful APIs<br />
    Testing: Jest, Mocha, Chai, React Testing Library, Loader.io, K6<br />
    Deployment: Ubuntu (AWS: EC2), NGINX</p>
    </div>
    </div>
   </div>
    </section>
  )
}

export default Home