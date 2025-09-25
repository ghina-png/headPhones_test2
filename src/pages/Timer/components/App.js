import React from "react";
import  Timer from '../Timer'
function App(){
    return(
        <div className="App">
            <Timer duration={ 2 * 24 * 60 * 60 * 1000}/>
        </div>
    );
}