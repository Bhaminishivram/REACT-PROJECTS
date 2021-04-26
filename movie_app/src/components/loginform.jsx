import React, { Component } from 'react'; 
class Loginform extends Component { 
    username = React.createRef();//this will create a ref object
      handleSubmit = formobject => {
          formobject.preventDefault(); 
          console.log('form submited'); 

          //const username = document.getElementById('userName').value; 
          const username = this.username.current.value; 
          console.log(username);
      } 
      componentDidMount() {
          this.username.current.focus();
      }
    render() { 
        return (  
            <div>
            <h1>Login</h1> 
            <form onSubmit={this.handleSubmit}>
            <div className="from-group">
                <label htmlFor="username"> UserName</label>
                <input type="text" ref={this.username}  id="username"className="form-control"/>
            </div>
            <div className="from-group">
                <label htmlFor="password">Password</label>
                <input type="text"  id="password" className="form-control"/>
            </div>   

            <button className="btn btn-primary"> Submit </button> 
        
            </form>  
            </div>
          );
    }
}
 
export default Loginform;