import  React ,{Component} from 'react' 
 
class Movies extends  Component
{
    state={
        count:0
     };
    render()
    {
        return(
           // <h1> Movies List</h1> 
              // <h1> {2*2*6}</h1> //regular experssion in react js  
              //<h1> {name} </h1> 
              <h1> {this.state.count}</h1> 
             // <h1>{'my Name is ${name}'}</h1>
        );
    }
} 

export default Movies; 