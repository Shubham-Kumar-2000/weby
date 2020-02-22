import $ from 'jquery';
import './App.css';
import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
class App extends Component
{
	constructor(props)
	{
	  super(props);
	  this.state={
	  	width:"88%",
	  	validPassword:-1,
	  	mismatch:0
	  };
	}
	
	componentDidMount() {
		
	}
	checkPattern(){
		if(document.getElementById("pass")!=null){
		let password=document.getElementById("pass").value;
		let conPassword=document.getElementById("conPass").value;
		if(password.length>7&&password.length<101)
			this.setState({
				validPassword:1,
				mismatch:password===conPassword?1:0
			});
		else
			this.setState({
				validPassword:0,
				mismatch:password===conPassword?1:0
			});}
	}
	match(){
		if(document.getElementById("conPass")!=null){
		let password=document.getElementById("pass").value;
		let conPassword=document.getElementById("conPass").value;
		if(password===conPassword)
			this.setState({
				mismatch:0
			});
		else
			this.setState({
				mismatch:1
			});}
	}
	submit(){
		let pointer=this;
		let finger = 'new Finger().get()';
		if(document.getElementById("username").value!=null&&this.state.validPassword===1&&this.state.mismatch===0)
			$.post("http://localhost:4000/api/users/register", {
                  username : document.getElementById("username").value,
				  password : document.getElementById("pass").value,
				  name:'Shubham',
				  confPassword:document.getElementById("conPass").value,
				  client:finger
                },  
                function(data,status) {
                	if(data.sign)
                	{
						localStorage.userId=data.userid;
        				window.location.href="/";
					}
                	else
                	{
                		pointer.setState({
                			message:data.msg
                		});
                	}
                });
	}
	render()
	{
		return(
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
                                 <h4 style={{"float":"left",display:"inline-block"}}>SIGN UP</h4><span style={{"float": "right"}} className="far fa-window-close fa-x btn" onClick={this.props.close}></span></div>
                             <div className="panel-body" id="pbody">
                        <form>
                            <div className="form-group" style={{overflow:"hidden"}}>
								<input type="text" className="form-control" id="username" defaultValue={null} placeholder="Enter you Username"  required = {true}/>   
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="pass" defaultValue={null} placeholder="Password" onChange={()=>{this.checkPattern()}} pattern=".{8,}" name="password"  required = {true}/>
                            </div>
                            {this.state.validPassword===0?<p className="error">Invalid Password!!<br/>Passwordlength must be between 8-100</p>:null}
                            <div className="form-group">
                                <input type="password" className="form-control" defaultValue={null} placeholder="Confirm Password" id="conPass" onChange={()=>{this.match()}} pattern=".{8,}" name="password" required = {true}/>
                            </div>
                            {this.state.mismatch!==0?<p className="error">Password mismatch!!</p>:null}
                            <div onClick={()=>{this.submit()}} className="btn btn-primary" >Submit</div>
                            <br/>
                            <p className="error">{this.state.message}</p>
                        </form></div><div className="panel-footer"><p>Already have an account? <i onClick={this.props.login} style={{"color":"#00aeff",cursor:"pointer"}}>Login Here</i></p></div>
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

export default App;