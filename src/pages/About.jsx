
import Navbar from "../components/Navbar";

const About = () => {
    return(
        <>
        
        <Navbar/>

              <div
        className="bg-[url('/aboutpage.png')] bg-cover bg-center min-h-screen flex items-center justify-center text-white"
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1>Greetings from About page !</h1>

        </div>
      </div>
      

        </>
    )
}

export default About;