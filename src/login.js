import $ from 'jquery';

import {CSSTransition} from 'react-transition-group';
import './App.css';
import React   from 'react';
class Example extends React.Component {
  constructor(props)
	{
	  super(props);
	  this.state={
	  	width:"88%", // to check for the phone number 
	  	validPassword:-1,  // to check for the password 
      state:0
	  };
  }
  
  
  // to check phonenumber already registered or not left

  componentDidMount() {
		
  }
  
  //validation for password pattern

	checkPattern(){
		if(document.getElementById("pass")!=null){
		let password=document.getElementById("pass").value;
		
		if(password.length>7&&password.length<101)
			this.setState({
				validPassword:1
				
			});
		else
			this.setState({
				validPassword:0
			
			});}
	}
    
  
// submit the data

  submit()
  {
   let pointer=this;
   let finger = 'new Finger().get()';
		if(document.getElementById("username").value!=null&&this.state.validPassword===1)
			$.post("http://localhost:4000/users/logIn", {
                  username : document.getElementById("username").value,
                  password : document.getElementById("pass").value,
                  confirm:this.state.state,
                  client:finger
                },
	
    function(data,status) {
      console.log(data);
      if(data.login){
        localStorage.userId=data.userid;
        window.location.href="/";
      }
      else if(!data.login&&data.confirm===1){
        pointer.setState({
          state:1
        })
      }
      else{
        pointer.setState({
          message:data.msg
        })
      }
    }
    );        
	}





    render() {
      return (
        <div style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"1"}}>
            <div className="container-fluid decor_bg" id="login-panel">
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                      <div className="container-fluid decor_bg" id="login-panel">
                      <CSSTransition
	                    in={true}
	                    appear={true}
	                    timeout={500}
	                    classNames="pull">
                         <div className="panel panel-primary" style={{marginTop:"20%",overflow:"auto",maxHeight:"60%"}}>
                             <div className="panel-heading" style={{"overflow":"hidden",marginTop:"-1px"}}>
                                 <h4 style={{"float":"left",display:"inline-block"}}>LOGIN</h4><span style={{"float": "right"}} className="far fa-window-close fa-x btn" onClick={this.props.close}></span></div>
                             <div className="panel-body" id="pbody">
                        <form>
                            <div className="form-group" style={{overflow:"hidden"}}>
                                <input type="text" className="form-control" id="username" defaultValue={null} placeholder="Enter you Username"  required = {true}/>   
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="pass" defaultValue={null} placeholder="Password" onChange={()=>{this.checkPattern()}} pattern=".{8,}" name="password"  required = {true}/>
                            </div>
                            {this.state.validPassword===0?<p className="error">Invalid Password!!</p>:null}

                            <div onClick={()=>{this.submit()}} className="btn btn-primary" >Submit</div>
                            <br/>
                            <p className="error">{this.state.message}</p>
                        </form>
                        {this.state.state===1?<div style={{overflow:'hidden'}}>
                          <p>Do you want to disconnect your previous device?</p>
                          <span onClick={()=>{this.submit()}} style={{backgroundColor:'green',color:'white',borderRadius:'3px',float:'left',padding:'10px',cursor:'pointer'}}>Yes</span>
                          <span onClick={()=>{window.location.href="/";}} style={{backgroundColor:'red',color:'white',borderRadius:'3px',float:'right',padding:'10px',cursor:'pointer'}}>No</span>
                        </div>:null}
                        </div>
                        <div className="panel-footer"><p>New user? <i onClick={this.props.sign} style={{"color":"#00aeff",cursor:"pointer"}}>Sign Up</i></p></div>
                        </div>
                      </CSSTransition>
                      </div>
                </div>
            </div>
        </div>
       </div> 

       
      );
    }
  }
  export default Example;