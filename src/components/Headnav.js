
import React,{Component} from 'react'
import Registerform from './Registerfrom'
import  '../css/Headnav.css'

export default class Headnav extends Component{

    constructor(){
        super();
        this.state={
              form:'0'
        }
        this.Changeevent=this.Changeevent.bind(this);
    }

    Changeevent(){
        if (this.state.form=='1') {
            
            this.setState({
                form:'0'
            }
            )
        } else {
            this.setState({
                form:'1'
            }
            )
            
        }
      
    }




render(){
    return(
        <div className="topheading">
            <div className="alldiv">   

            

    
            <div> 
                 <h3>Engineering students Study Material</h3>  
                 
           </div> 

                 <div className="buttononclick">
                 <input type="button" value="clickon"   onClick={this.Changeevent}/>
                 </div>

                 
                 {this.state.form=='1'  ?  
                   <Registerform  onClick={this.Changeevent} ></Registerform>  :

                   <div> </div>
                }
                <div className="button">
                   <input type="button" value="singup/login"  className="loginbutton"></input>
                  {/* <a href="#"  className="loginbutton" >Exams postponed</a> */}
                  <input type="button" value="Exams postponed"  className="loginbutton"></input>

                   </div>
                   <div>  </div>


                <div className="seacrhbar">
                    <input type="text" placeholder="enterance eams" height="20%"/>
                </div>

                
                    <div id="education">
                        <div>   
                        <input type="button" value="Admissions" className="educationchild" ></input>
                        <input type="button" value="Exams" className="educationchild" ></input>
                        <input type="button" value="Colleges" className="educationchild" ></input>
                        <input type="button" value="Universities" className="educationchild" ></input>
                        <input type="button" value="Courses" className="educationchild" ></input>
                        <input type="button" value="Onlilne COurieer COunsellig" className="educationchild" ></input>
                        <input type="button" value="Used Book Corner" className="educationchild" ></input>
                        <input type="button" value="Message lounge" className="educationchild" ></input>


                        </div>

                         </div>


                

                </div>
         </div>
          
          
                

           
             
     
    )
}
    
}