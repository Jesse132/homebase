import {useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import logo from "@/images/logo.png";
import {BsGithub, BsLinkedin} from 'react-icons/bs';


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage; 
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-slate-100 drop-shadow";
  return (
    <nav>
        <div className={`${navbarBackground}${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left */}
                    <img alt="logo" src={logo} className="object-scale-down h-20 w-20" />
                    {/* right */}
                          {isAboveMediumScreens ?
                    (<div className={`${flexBetween} w-full`}>
                      <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        <Link 
                            page="Projects"                            
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        <Link 
                            page="Contact Me"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        </div>

                    <div className="flex gap-10 mr-3">
                      <button><BsLinkedin className="text-blue-500 hover:text-red-500 bg-white rounded-md" size = '3em' onClick = {()=>{window.location.href = "https://www.linkedin.com/in/jesse-fu/"}}></BsLinkedin></button>
                      <button><BsGithub className="text-black hover:text-red-500 bg-white rounded-full" size = '3em' onClick = {()=>{window.location.href = "https://github.com/Jesse132"}}></BsGithub></button>
                    </div>
                    </div>)
                      : 
                        <button
                        className="rounded-full bg-green-500 p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                        <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                    }
                </div>
            </div>
        </div>
        {/* mobile setting modal */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-slate-100 drop-shadow-xl">
                {/* Close Icon */}
                <div className="flex justify-end p-12">
                    <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>
                {/* menu items */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl" >
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        <Link 
                            page="Projects"                            
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        <Link 
                            page="Contact Me"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                      <button><BsLinkedin className="text-blue-500 hover:text-red-500" size = '3em' onClick = {()=>{window.location.href = "https://www.linkedin.com/in/jesse-fu/"}}></BsLinkedin></button>
                      <button><BsGithub className="text-black hover:text-red-500" size = '3em' onClick = {()=>{window.location.href = "https://github.com/Jesse132"}}></BsGithub></button>
                        </div>
                
            </div>
        )}

    </nav>
  )
}

export default Navbar;