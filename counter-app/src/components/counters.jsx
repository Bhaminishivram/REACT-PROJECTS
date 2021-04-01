import React,{Component} from 'react'; 
import Counter from './counter'; 

class Counters extends Component{
    state = {
        counters:[
            { id:1 ,value:1},
            { id:2 ,value:2},
            { id:3 ,value:3},
            { id:4 ,value:4},
         ]
    } ; 

    handleReset =() =>{
      const counters = this.state.counters.map(c=>{
          c.value =0; 
          return c;
      });
      this.setState({counters});
    };
    render()
    {
        return(
            <div> 
                <button className="btn btn-primary btn-sm m-2">RESET BUTTON</button>
                {/*   {this.state.counters.map(counter=><Counter key={counter.id} countervalue={counter.value}/>) } */} 
                
               {this.state.counters.map(counter => (
                    <Counter key= {counter.id} value={counter.value}>
                    <h1>Counter #{counter.id}</h1> 
                    </Counter> ))
                  } 
            </div>
        );
    }
} 
export default Counters;