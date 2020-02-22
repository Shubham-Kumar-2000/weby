import React  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
class Mentor extends React.Component {
constructor(props)
{
  super(props);
  this.state={
    mentor : this.props.mentor,
  showExp : false
  };
}
componentDidMount(){
  this.setState({
    mentor:this.state.mentor
  })
}
  toggleExp()
  {
    this.setState({
      showExp : !this.state.showExp
    });
  }
  render() {
    return (
    <div id={this.state.mentor._id} className="col-xs-12 col-sm-6 col-md-4 cont" style={{position:"relative",display:'inline-block',float:'left'}}>
      <div className="thumbnail" style={{padding:"0px"}}>
      <div className='row'>
        <div className="col-sm-12">
          <div className="crop" style={{"maxHeight":"250px"}}><img src={this.state.mentor.url} alt="Mentor"  className="image"/></div>
        </div>
        <center className="col-sm-12" style={{padding:"5px"}}>
          <div className="caption">
            <h2 className="txt" style={{marginBottom:"5px",fontSize:"20px","color":"#1DA6FD"}}>{this.state.mentor.name}</h2>
            <h6 className="txt" style={{marginBottom:"5px",fontSize:"15px"}}>
              <span style={{"color":this.state.mentor.st}}>{this.state.mentor.status}</span>
            </h6>
          </div>
          {
            !this.state.showExp?
            <div>
              <span className="btn" onClick={()=>{this.toggleExp()}} style={{"backgroundColor":"white","color":"#9d00ff","borderColor":"#9d00ff","marginTop":"5px"}}>Show Description <i className="fas fa-chevron-down"></i></span>
            </div>:
            <CSSTransition
            in={true}
            appear={true}
            key={this.state.mentor._id}
            timeout={500}
            classNames="drop">
            <div>
              <div>
              <span className="btn" onClick={()=>{this.toggleExp()}} style={{"backgroundColor":"white","color":"#9d00ff","borderColor":"#9d00ff","marginTop":"5px"}}>Hide Description <i className="fas fa-chevron-up"></i></span>
              </div>
              <br/>
              <p style={{wordWrap:'break-word',maxWidth:'264px'}}>
              {this.state.mentor.description}
              </p>
            </div>
            </CSSTransition>
          }
        </center>
      </div>
      </div>
    </div>
    );
  }
}

export default Mentor;