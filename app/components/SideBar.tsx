const SideBar = () => {
    return (
      <div>
        <img 
            src="../official_profile_pic.jpg" 
            alt= 'profile pic'
            // className="pl-20"
        />
        <h3> <span>Najm</span> Choueiry</h3>
        <p> Software Developer </p>
        <p> Download my CV</p>


        <div id="address"> 
            <div>
                <div>
                    <p> Beirut, Lebanon</p>
                </div>
                <p> najmchoueiry1@gmail.com </p>
                <p> 00961 71 994 775 </p>
            </div>
            <button> Email me !</button>
            <button> Toggle Theme</button>
        </div>
      </div>
    )
  }
  
  export default SideBar