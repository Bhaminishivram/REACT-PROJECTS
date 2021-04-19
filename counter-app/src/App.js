import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

  
class App extends Component {
  state = { 
      counters: [
          { id: 1, value: 4 }, 
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 },
      ]
   };   
  //  constructor(){
  //    super(); 
  //    console.log('App-Constructor');
  //  }  

  //below constructor is called only once when the instance of a class is created
  //this is good for instialising the properties of the instance 
  constructor(props){
        super(props); 
        console.log('App-Constructor',this.props);
      }  
 //this is called after the components is rendered into the dom , this is perfect to make ajax calls to get the data 
 // from the server 

    componentDidMount(){
      //Ajax calls  
      console.log('App-Mounted')
    } 

  // react will schedule a call with the render method once it see setstate , all childer elements will also gets 
  // rendered 
   handleIncrement = counter => {
    //  console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++; 
    this.setState({counters});

    // counters[0] = {...counter};
    // counters[0].value++; // we should not modify the state directly
    // console.log(this.state.counters[0]);
 };

 handleDelete = (counterId) => {
    // console.log('Event handler called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters:counters})
 };
 handleReset = () => {
     const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
     });
     this.setState({ counters});
 };

  render() { 
    return ( 
      <React.Fragment>
        <main className="container">
          {/* <NavBar totalCounters = {this.state.counters.length}/> */} 
          <NavBar totalCounters = {this.state.counters.filter(c => c.value>=0).length}/>
          <Counters 
          counters ={this.state.counters}
          onDelete ={this.handleDelete}
          onIncrement ={this.handleIncrement}
          onReset = {this.handleReset}/> 
        </main>
      </React.Fragment>
     );
  }
}
 

export default App;
