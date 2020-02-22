import './App.css';
import {CSSTransition} from 'react-transition-group';
import React   from 'react';
import Login from './login';
import Sign from './signup';
class Example extends React.Component {
    constructor(props)
	{
	  super(props);
	  this.state=
	  {
	  	showLogin:false,
        showSignUp:false,
        loggedin:localStorage.userId==null?false:true,
        username:''
	  }
    }
    componentWillMount(){
        if(this.state.loggedin===true){
        }
    }
	toggleLogin()
	{
        if(this.state.loggedin===false)
        this.setState({
			showLogin:!this.state.showLogin,
			showSignUp:false
		})
	}
	toggleSignUp()
	{
        if(this.state.loggedin===false)
        this.setState({
			showSignUp:!this.state.showSignUp,
			showLogin:false
		})
    }
    render(){
        return(
            <CSSTransition 
            in={true}
            appear={true}
            timeout={500}
            classNames="down">
                <><nav className="navbar navbar-default navbar-fixed-top" style={{border:'solid',borderWidth:'0px 0px 1px 0px',boxShadow:'0pc 5px 5px #a8a8a8'}}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <ul className="nav navbar-nav" style={{float:'left'}}>
                            <li style={{padding:'0px',float:'left'}}><a  href="/" style={{padding:'15px',color:'black',cursor:'pointer'}}>TASA</a></li>
                            </ul>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" style={{color:'black'}}>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                           
                        </ul>
                        {this.state.loggedin===false?<ul className="nav navbar-nav navbar-right">
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#achiv'>Achivements</a></li>
                            <li><a href='#abt'>About Us</a></li>
                            <li onClick={()=>{this.toggleSignUp();}} style={{padding:'15px',color:'black',cursor:'pointer'}}><span className="glyphicon glyphicon-user"></span> Sign Up</li>
                            <li onClick={()=>{this.toggleLogin();}} style={{padding:'15px',color:'black',cursor:'pointer'}}><span className="glyphicon glyphicon-log-in"></span> Login</li>
                        </ul>:<ul className="nav navbar-nav navbar-right">
                            {
                                this.state.username==='admin'?<li><a href='/addContest'><span className="glyphicon glyphicon-user"></span> Add Contest</a></li>:null
                            }
                            <li><a href='/profile'><span className="glyphicon glyphicon-user"></span> Profile</a></li>
                            <li onClick={()=>{this.toggleLogout();}}  style={{padding:'15px',color:'black',cursor:'pointer'}}><span className="glyphicon glyphicon-log-in"></span> LogOut</li>
                        </ul>}

                        </div>
                    </div>
                </nav>
                {this.state.showLogin?<Login close={this.toggleLogin.bind(this)} sign={this.toggleSignUp.bind(this)}/>:null}
				{this.state.showSignUp?<Sign close={this.toggleSignUp.bind(this)} login={this.toggleLogin.bind(this)}/>:null}
                </>
            </CSSTransition>
        )
    }
}
export default Example;