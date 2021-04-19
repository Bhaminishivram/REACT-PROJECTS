import React, {Component} from 'react';
 
const NavBar = (props)=> 
{
  return(
    <nav class="navbar navbar-light bg-light"> 
     <div class ="container-fluid">
       <a class ="navbar-brand" href="#">NavBar
       <span className ="badge bage-pill badge-secondary">{props.totalCounters}</span> </a>
     </div>
    </nav>
  );
}
// class NavBar extends Component
// {
//     state = { } 
//     render() {
//         return(
//           <nav class="navbar navbar-light bg-light">
//           <div class="container-fluid">
//             <a class="navbar-brand" href="#">{this.props.totalCounters}</a>
//           </div>
//         </nav>
        
//         ); 
//     }
// } 
  export default NavBar; 