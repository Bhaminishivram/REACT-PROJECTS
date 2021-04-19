import React from 'react';

class App extends React.Component {
  render(){
    return(
      <div>
        Hello world!!! 
        <h1> Header</h1> 
        <h2>Content</h2> 
        <p>This is the content</p> 
        <h3>{3+8}</h3> 
        {/* experssion */}
        <h2>{8*9}</h2> 
      {/* we can just add props to reactDOM.render() 
      function in main.js and use it inside our component. */}
         <h1>{this.props.headerProp}</h1>
         <h2>{this.props.contentProp}</h2>
     </div>
    );
  }
}
export default App;