import './ClearUp.css'
import React, {useState, useEffect} from 'react'


function ClearUp(){

    const [widthCount,setWidthCount] = useState(window.screen.width)

    function actualwidth(){
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }   

    useEffect(()=>{
        console.log("add event")
        window.addEventListener("resize", actualwidth)

        return()=> {
            console.log("remove event");
            window.removeEventListener("resize", actualwidth)

        }

    })
 
    return(
        <div className="cls">
            <p>The actual size of the window is:</p>
            <h1>{widthCount}</h1>

        </div>
    )
}
export default ClearUp;