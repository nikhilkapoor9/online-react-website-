import React from 'react'
import '../css/Welcome.css'

export default function button(props){
    return(
    // <img></img>

   // coursesbutton is class name  admissions

// {/* <input type="button"   value={props.value} className="coursesbutton" /> */}

<div className="singlebutton">

<img  src={require('../images/'+props.picname)}   width="70px" height="70px"  className="images"></img>
<input type="button"   value={props.value}  className="coursesbutton"/>

</div>


   
       )
}