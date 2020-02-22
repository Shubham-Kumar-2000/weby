import './App.css';
import React  from 'react';
import Header from './header';
import Footer from './footer';
import List from './list';
import {CSSTransition} from 'react-transition-group';
class Home extends React.Component {
  constructor(props)
{
  super(props);
  this.state={
    showimage:-1
  }
}
componentDidMount(){
  console.log('shubham');
  alert('hover each section to see effects and please reload the page while checking responsive')
}
    render(){
        return(
            <div style={{position:'relative',background:'url("https://upload.wikimedia.org/wikipedia/commons/e/e4/StarfieldSimulation.gif")'}}>
                <Header/>
                <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{marginTop:"60px",position:'relative'}}>
                  {/* Indicators */}
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                  </ol>
                  {/* Wrapper for slides */}
                  <div className="carousel-inner">
                    <div className="item active">
                      <center>
                      <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" alt="Los Angeles" />
                      </center>
                    </div>
                    <div className="item">
                      <center>
                      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" alt="Chicago" />
                      </center>
                    </div>
                    <div className="item">
                      <center>
                      <img src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="New York" />
                      </center>
                    </div>
                  </div>
                  {/* Left and right controls */}
                  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" />
                    <span className="sr-only">Next</span>
                  </a>
                  
                </div>
                <div style={{position:"absolute",top:'0px',height:'80%',width:'80%',marginTop:'8%',marginLeft:"10%"}}>
                  <center>
                  <div id="banner_content" style={{'color':"white"}}>
                    <h1>TASA</h1>
                    <p>Exploring Space Since Eternity Of Time.</p>
                  </div></center>
                </div>
                <div style={{position:'relative',backgroundColor:'#ffffff'}} onMouseOver={()=>{
                  if(window.screen.width<=420){
                    return
                  }
                  document.getElementById('mv').style.transform='rotate(-5deg)';
                  document.getElementById('mv1').style.transform='rotate(5deg)';
                }}>
                
                <div style={{margin:"20px",position:'relative'}}><br/>
                <center><h1 style={{color:'#0F3299'}}>Overview</h1></center>
                <div id='mv' style={{'color':"white",backgroundColor:'#ffbf00',position:"relative",maxWidth:'200px',padding:"3%",zIndex:'2',transition:'all 300ms linear',marginLeft:window.screen.width>420?'0px':'10%'}}><center>
                    <h1>Mission</h1>
                    <h3>&</h3>
                    <h1>Vision</h1>
                    </center></div>
                <div id='mv1' style={{backgroundColor:'#08b3c4',marginLeft:window.screen.width>420?'110px':'0px',position:'relative',top:window.screen.width>420?'-100px':'10px',padding:window.screen.width>420?'90px':'5px',zIndex:'1',transition:'all 300ms linear',border:'dashed',borderColor:'#ffbf00',width:'90%'}}>
                  <div style={{color:'white',fontSize:'30px'}}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
                  
                </div>
                </div>
                <div id='projects' style={{margin:"20px",position:'relative'}}>
                <center><h1 style={{color:'white'}}>Our Recent Projects</h1></center>
                  {!(this.state.list)?<div style={{width:'100%',height:'270px'}}onMouseOver={()=>{
                  this.setState({list:true})
                }}></div>:
                  <div><List/></div>}
                </div>
                <div>
                <div id="achiv" className="box" style={{marginBottom:"0px"}}>
                <center><div className="text-center"><h1 style={{color: '#0F3299',fontWeight:"bold"}}>Our Achievements</h1><br/></div>
                
                <div className="cont1"><img onClick={()=>{this.setState({showimage:1})}} src="https://images.unsplash.com/photo-1548391350-968f58dedaed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Turkey" className="recogImg" style={{height:"200px",maxWidth:"100%"}}/><div className="bottom">achivement1</div> </div>
                {this.state.showimage===1?<div onClick={()=>{this.setState({showimage:0})}}  style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"9999999"}}>
                <span style={{"float": "right",position:"absolute",top:"10px",right:"0px"}} className="far fa-window-close btn"></span>
                <CSSTransition
                              in={true}
                              appear={true}
                              timeout={500}
                              classNames="pull"><img src="https://images.unsplash.com/photo-1548391350-968f58dedaed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Nexus" className="recogImg" style={{height:window.screen.width>420?"60%":"auto",marginTop:"10%",width:window.screen.width>420?"auto":"80%"}}/></CSSTransition>
                </div>:null}
                <div className="cont1"><img onClick={()=>{this.setState({showimage:2})}} src="https://images.unsplash.com/photo-1543147495-b6984a841135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1022&q=80" alt="graduation seremony" className="recogImg" style={{height:"200px",marginLeft:window.screen.width>420?"10px":"0px",maxWidth:"100%"}}/><div className="bottom">achivement2</div></div>
                {this.state.showimage===2?<div onClick={()=>{this.setState({showimage:0})}}  style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"9999999"}}>
                <span style={{"float": "right",position:"absolute",top:"10px",right:"0px"}} className="far fa-window-close btn"></span>
                <CSSTransition
                              in={true}
                              appear={true}
                              timeout={500}
                              classNames="pull"><img src="https://images.unsplash.com/photo-1543147495-b6984a841135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1022&q=80" alt="American Center" className="recogImg" style={{height:window.screen.width>420?"60%":"auto",marginTop:"10%",width:window.screen.width>420?"auto":"80%"}}/></CSSTransition>
                </div>:null}
                <div className="cont1"><img onClick={()=>{this.setState({showimage:3})}} src="https://images.unsplash.com/photo-1516491575772-bab9f75948c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Certificate" className="recogImg" style={{height:"200px",marginLeft:window.screen.width>420?"10px":"0px",maxWidth:"100%"}}/><div className="bottom">achivement3</div></div>
                {this.state.showimage===3?<div onClick={()=>{this.setState({showimage:0})}}  style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"9999999"}}>
                <span style={{"float": "right",position:"absolute",top:"10px",right:"0px"}} className="far fa-window-close btn"></span>
                <CSSTransition
                              in={true}
                              appear={true}
                              timeout={500}
                              classNames="pull"><img src="https://images.unsplash.com/photo-1516491575772-bab9f75948c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Certificate" className="recogImg" style={{height:window.screen.width>420?"60%":"auto",marginTop:"10%",width:window.screen.width>420?"auto":"80%"}}/></CSSTransition>
                </div>:null}
                <div className="cont1"><img onClick={()=>{this.setState({showimage:4})}} src="https://images.unsplash.com/photo-1514820720301-4c4790309f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="Certificate" className="recogImg" style={{height:"200px",marginLeft:window.screen.width>420?"10px":"0px",maxWidth:"100%"}}/><div className="bottom">achivement3</div></div>
                {this.state.showimage===4?<div onClick={()=>{this.setState({showimage:0})}}  style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"9999999"}}>
                <span style={{"float": "right",position:"absolute",top:"10px",right:"0px"}} className="far fa-window-close btn"></span>
                <CSSTransition
                              in={true}
                              appear={true}
                              timeout={500}
                              classNames="pull"><img src="https://images.unsplash.com/photo-1514820720301-4c4790309f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="Certificate" className="recogImg" style={{height:window.screen.width>420?"60%":"auto",marginTop:"10%",width:window.screen.width>420?"auto":"80%"}}/></CSSTransition>
                </div>:null}
                <div className="cont1"><img onClick={()=>{this.setState({showimage:5})}} src="https://images.unsplash.com/photo-1524672875191-f3e0c7dd6dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Certificate" className="recogImg" style={{height:"200px",marginLeft:window.screen.width>420?"10px":"0px",maxWidth:"100%"}}/><div className="bottom">achivement3</div></div>
                {this.state.showimage===5?<div onClick={()=>{this.setState({showimage:0})}}  style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"9999999"}}>
                <span style={{"float": "right",position:"absolute",top:"10px",right:"0px"}} className="far fa-window-close btn"></span>
                <CSSTransition
                              in={true}
                              appear={true}
                              timeout={500}
                              classNames="pull"><img src="https://images.unsplash.com/photo-1524672875191-f3e0c7dd6dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Certificate" className="recogImg" style={{height:window.screen.width>420?"60%":"auto",marginTop:"10%",width:window.screen.width>420?"auto":"80%"}}/></CSSTransition>
                </div>:null}
                </center>
              </div></div>
                <Footer/>
                </div>

        )
    }
}
export default Home;