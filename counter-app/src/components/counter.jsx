import React,{Component} from 'react';
class Counter extends Component 
 { 
     state={ 
         value:this.props.countervalue
     }; 
   
     handleIncrement =() =>
     {
         this.setState({
             count:this.state.value + 1
         }) ;

     }; 
     handleDecrement =()=>
     {
         this.setState({
             count:this.state.count-1
         }) 
     }
    render(){
       //every react component has the property called props and it is an plain JS object 
      // console.log('props' ,this.props);
     return(
         <div> 
             {
                <h4>{this.props.id}</h4> 
              <span className= {this.getBadgeClasses()}> 
                     {
                        this.formatCount()
                  }
                 </span>
                 }
             
             <button onClick={() => this.props.onDecrement(this.props.counter)} className = "btn btn-danger btn-sm m-2">Decrement</button> 
             <span style={{fontSize:100}}>{this.formatCount()}</span>
             <button onClick={() => this.props.onIncrement(this.props.counter.id)} className = "btn btn-secondry btn-sm">Increment</button> 
         </div>
     );

       } 

       formatCount(){
           const{ value } = this.props .counter;
           const x = <h1>Zero</h1>;
           return value === 0 ? 'x' : value;
       } 
         getBadgeClasses()
         {
             let classes = "badge m-2 badge-"; 
            //  classes += this.props.counter.value ===0? "warning" : "primary"; 
              return classes; 
         }
         } 
         export default Counter;
        