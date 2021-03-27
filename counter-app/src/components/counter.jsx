import React,{Component} from 'react';
class Counter extends Component 
 { 
     state={ 
         count:0
     }; 
   
     handleIncrement =() =>
     {
         this.setState({
             count:this.state.count+1
         }) 

     }; 
     handleDecrement =()=>
     {
         this.setState({
             count:this.state.count-1
         }) 
     }
    render(){
       
     return(
         <div> 
             <button onClick={this.handleDecrement} className = "btn btn-danger">Decrement</button> 
             <span style={{fontSize:100}}>{this.formatCount()}</span>
             <button onClick={this.handleIncrement} className = "btn btn-primary">Increment</button> 
         </div>
     );

       } 

       formatCount(){
           const{ count } = this.state; 
           return count === 0 ? 'Zero' : count;
       } 

}  
 

export default Counter; 