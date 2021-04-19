import React from 'react'; 
class App extends React.Component{
  render(){
    return(
      <div> 
      <h1>Hello world;</h1>
      <h2>Header</h2>
      <h3>Content</h3> 
      <p>This is the content</p> 
      <h1>{this.props.headerProp}</h1>
      <h2>{this.props.contentProp}</h2>
      </div>
    )
  }
}
export default App;
