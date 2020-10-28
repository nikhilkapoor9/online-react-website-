import React from 'react'
import '../css/registerfrom.css'
import close from '../images/close.png'




 const Registerfrom=(props)=>{

 console.log("register form class ",props)


return(
    <div>  

        <div className="registerfrom">

             <h1 className="h1text">SIgn up</h1>
             <input type="text" placeholder="your name"  />
             <input type="text" placeholder="your email"  />

             <select className="countriesnames" >
                 <option>India</option>
                 <option>zimbave</option>
                 <option>pakistan</option>
                 <option>Canada</option>
                 <option>us</option>
                 <option>AUstralia</option>
             </select>

             <input type="number" placeholder="your mobile" className="countriesnames"/>
             <div>
             <img src={close} width="40" height="20"  className="closeform"  onClick={props.Changevent}/>

             </div>




        </div>
    </div>
)
}

export default  Registerfrom;