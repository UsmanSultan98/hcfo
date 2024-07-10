import React from "react";
import '../app/style.css';
function Home(){

    return(
        <div className="flex text-center bg-gray-300 h-96 text-bold text-lg flex-col items-center justify-center">
            <h1 className="pt-4 text-red-600">Home</h1>
            <h2> slideshow of pictures will come here </h2>
            <div id='spinner'></div>
        
        </div>
    );
}

export default Home;