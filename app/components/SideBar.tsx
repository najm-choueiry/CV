import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";


const SideBar = () => {
    return (
      <div >
        <img 
            src="../official_profile_pic.jpg" 
            alt= 'profile pic'
            className="w-32 h-32 rounded-full"
        />
        <h3 className="my-4 text-3xl font-medium tracking-wide"> <span>Najm</span> Choueiry</h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full"> Software Developer </p>
        <a 
          className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center" 
          href="" download="Najm_Choueiry_CV.pdf"> 
          <GiTie className="w-6 h-6"/>Download my CV
        </a>

        <div id="social" className="flex justify-center gap-20 my-5 text-gray-800 w-20/12 md:w-full mx-auto">
        <a>
          <FaGithub className="w-8 h-8  cursor-pointer"/>
        </a>
        <a>
          <FaLinkedin  className="w-8 h-8 cursor-pointer"/>
        </a>
        </div>
        <div id="address" > 
            <div>
                <div className="flex gap-4">
                <GoLocation className="mt-1"/> 
                    <p> Beirut, Lebanon</p>
                </div>
                <p> najmchoueiry1@gmail.com </p>
                <p> 00961 71 994 775 </p>
            </div>
            <div className="flex flex-col">
              <button> Email me!</button>
              <button> Toggle Theme</button>
            </div>
        </div>
      </div>
    )
  }
  
  export default SideBar