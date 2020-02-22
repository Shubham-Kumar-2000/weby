import './App.css';
import React   from 'react';
class Example extends React.Component {
  constructor(props)
	{
	  super(props);
	  this.state={
	  };
  }


    render() {
        return(
        <div className="footer" style={{width:'100%',backgroundColor:'black',padding:'10px'}}>
        <center>
          <div className="row" style={{textAlign: 'left'}}>
          <div id='abt' className="col-sm-4" style={{opacity:'0.7'}}>
              <h2>About Us</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-sm-4">
            <h2 style={{opacity:'0.7'}}>Contact Us</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="query">Query</label>
                  <input type="text" className="form-control" id="query" />
                </div>
                <div className="btn" style={{opacity:0.7,padding:"0px"}}>
                  <input type="submit" className="form-control" id="sub" value='Contact'/>
                </div>
              </form>
            </div>
            <div className="col-sm-4">
              <h2 style={{opacity:'0.7'}}>Social Links</h2>
              <a href>News Feed</a><br /><br />
              <i className="fab fa-facebook fa-2x" />
              <i className="fab fa-instagram fa-2x" />
              <i className="fab fa-linkedin fa-2x" />
            </div>
          </div>
        </center>
      </div>
      
      );
    }
  }
  export default Example;