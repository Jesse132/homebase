import { useState, useEffect } from 'react'
import Navbar from "@/scenes/navbar";
import { SelectedPage } from './shared/types';
import Home from './scenes/Home';
import Projects from './scenes/Projects';
import ContactMe from './scenes/ContactMe';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

useEffect(()=>{
  const handleScroll = () => {
    if(window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if (window.scrollY !==0) setIsTopOfPage(false);
  }
  window.addEventListener("scroll", handleScroll);
  return () => {window.removeEventListener("scroll", handleScroll)}
}, []);

  return (
    <div className="app">
      <div className="bg-slate-200">
      <Navbar 
      isTopOfPage={isTopOfPage}
       selectedPage={selectedPage}
       setSelectedPage={setSelectedPage}/>
        <Home/>
        <Projects/>
        <ContactMe/>
        </div>
    </div>
  )
}

export default App;
