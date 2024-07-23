import React from "react";
import '../app/style.css';
import Slideshow from "./slideshow";
function Home(){

    return(
        <div className="h-96 m-4">
            
            <Slideshow />  

            <div className="w-full border-b border-gray-500 my-4"> </div>      
        </div>
    );
}

export default Home;