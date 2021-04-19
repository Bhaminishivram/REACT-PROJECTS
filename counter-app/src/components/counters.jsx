import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 4 }, 
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
     };

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
        <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>
            { this.state.counters.map(counter => 
            // <Counter 
            //     key={counter.id} // key attribute is used internally by React, we cannot access in counter component 
            //     value={counter.value} 
            //     onDelete={this.handleDelete} 
            //     id={counter.id} 
            // />
            <Counter 
                key={counter.id} // key attribute is used internally by React, we cannot access in counter component 
                onDelete={this.handleDelete}
                onIncrement = {this.handleIncrement}
                counter = {counter}
            />
            )}
            
        </div> );
    }
}
 
export default Counters;

