import Navbar from "../components/Navbar";


const Contact = () => {
    return(
        <>
        <Navbar/>
              <div
        className="bg-[url('/contactpage.png')] bg-cover bg-center min-h-screen flex items-center justify-center text-white"
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h1>Greetings from Contact page !</h1>
        </div>
      </div>

        </>
    )
}

export default Contact