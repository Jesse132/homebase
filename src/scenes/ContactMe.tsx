import { BsLinkedin} from 'react-icons/bs';

function ContactMe() {
  return (
    <section id="contactme"
    className="flex flex-col items-center justify-center mt-20 mx-auto gap-5">
              <h2 className="text-2xl">Contact Me</h2>
        <div>If you're interested in my work, please contact me through direct messaging on LinkedIn! </div>
        <button><BsLinkedin className="text-blue-500 hover:text-red-500" size = '3em' onClick = {()=>{window.location.href = "https://www.linkedin.com/in/jesse-fu/"}}></BsLinkedin></button>
        <div> </div>
    </section>
  )
}

export default ContactMe