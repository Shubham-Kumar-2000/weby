import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import Mentor from './mentor';
import Header from './header'
class App extends Component
{
constructor(props)
{
  super(props);
  this.state=
  {
   mentors: [{
     url:'https://images.unsplash.com/photo-1541018939203-36eeab6d5721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
     name:'Project Lorem Epsum',
     status:"Completed",
     st:'green',
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   },{
    url:'https://images.unsplash.com/photo-1541018939203-36eeab6d5721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    name:'Project Lorem Epsum',
    status:"Work in Progress",
    st:'yellow',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },{
    url:'https://images.unsplash.com/photo-1541018939203-36eeab6d5721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    name:'Project Lorem Epsum',
    status:"Not Started",
    st:'red',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }]
  };
}

render()
{
let mentors=this.state.mentors.sort((a,b)=>{
  if(this.props.sort)
  {
    return b[this.props.sortBy]-a[this.props.sortBy]
  }
  else
  return 0;
});
console.log(mentors)
return(<>
<Header/>
<div style={{width:"100%",position:"relative",marginTop:'100px',padding:"20px"}}>
<div className="container" style={{position:"relative"}} >
{
mentors.map(mentor =><div key={mentor._id}>{
    <CSSTransition
    in={true}
    appear={true}
    timeout={800}
    classNames="fade"
    >
    <Mentor
            mentor={mentor}
          />
          </CSSTransition>}
</div>


  )
}
</div></div>
</>

);
}
}

export default App;
