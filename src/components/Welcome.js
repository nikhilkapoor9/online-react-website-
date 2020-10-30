import React,{Component} from 'react';
import '../css/Welcome.css'
import Button from './Button'
import Footer from './Footer';
import Registerfrom from './Registerfrom';
// import mail from '../images/mail.png'


 

export default class Welcome  extends Component{

    constructor(){
        super();
        this.state={
               displayform:'0'

        }
        this.Changevent=this.Changevent.bind(this);
    }
    
    Changevent(){
            console.log("earlier state is =>",this.state.displayform)
         if(this.state.displayform=='0'){
             this.setState({
                 displayform:'1'
                 
             })
         }
         else  {
            this.setState({
                displayform:'0'
            })
            console.log("after button clicked  state is =>",this.state.displayform)

         }

         

    }



render(){
    return(<div>
                            <div className="topheading">
                 <h3>Engineering students Study Material</h3>  
                 <input type="button" value="Click On" className="Clickon" onClick={this.Changevent}/>

                 {
                     this.state.displayform=='1' ?
                     <Registerfrom  onClick={this.Changevent}></Registerfrom>  :  
                     <div></div>
                 }

                            </div>

                            <div>
                                <img src={require('../images/mail.png')}  className="mail"/>

                                <a href="#" className="mailid">helpmynextexam.com</a>
                                <input type="button" value="SIgn Up/Log In" className="Logon"  onClick={this.Changevent} />
                                <input type="button" value="Exams postponed" className="Logon"  />

 
                                        


                                {/* <input type="text"  placeholder="Entrance Exams,colleges"  className="seacrhbar"/> */}
                                <input type="text" placeholder="Enterance Exams" className="seacrhbar"></input>

                            </div>

                            
                                 
                             {/* <img  src={require('../images/admissions.png')}   width="70px" height="70px"  className="admissions"></img>
                                <Button value="Admission"></Button>
                                <img  src={require('../images/exams.jpg')}   width="70px" height="70px"  className="admissions"></img>
                                <Button value="Exams"></Button>
                                <img  src={require('../images/colleges.jpg')}   width="70px" height="70px"  className="admissions"></img>
                                <Button value="College"></Button>
                                <img  src={require('../images/university.ico')}   width="70px" height="70px"  className="admissions"></img>

                                <Button value="Universities"></Button>
                                <img  src={require('../images/Books.jpg')}   width="70px" height="70px"  className="admissions"></img>

                                <Button value="Courses"></Button>
                                <img  src={require('../images/person.png')}   width="70px" height="70px"  className="admissions"></img>

                                <Button value="Online Counselling"></Button>
                                <img  src={require('../images/books2.png')}   width="70px" height="70px"  className="admissions"></img>

                                <Button value="User Book Corner"></Button>
                                <img  src={require('../images/chat.ico')}   width="70px" height="70px"  className="admissions"></img>

                                <Button value="Message Lounge"></Button>
                                <img  src={require('../images/colleges.jpg')}   width="70px" height="70px"  className="admissions"></img>  */}
                                 <div  className="multiplebutton">  

                                <Button value="Admission"  picname="admissions.png"></Button>
                                <Button value="exams"  picname="exams.jpg"></Button>
                                <Button value="colleges"  picname="colleges.jpg"></Button>
                                <Button value="universities"  picname="university.ico"></Button>
                                <Button value="courses"  picname="Books.jpg"></Button>
                                <Button value="Online Counselling"  picname="person.png" ></Button>
                                <Button value="User Book Corner" picname="books2.png"></Button>
                                <Button value="Message Lounge" picname="chat.ico"></Button>




                                 
                                 
                                  </div>
                                
                            
                             
                                
                                
                                    
                                   
                                


                                 <div  className="footer">  
                                 <Footer   ></Footer>

                                 </div>

                                 

    </div>)
}
}
