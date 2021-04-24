import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {
   
 render() { 
        const{onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        return ( 
        <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>
            { this.props.counters.map(counter => 
            // <Counter 
            //     key={counter.id} // key attribute is used internally by React, we cannot access in counter component 
            //     value={counter.value} 
            //     onDelete={this.handleDelete} 
            //     id={counter.id} 
            // />
            <Counter 
                key={counter.id} // key attribute is used internally by React, we cannot access in counter component 
                onDelete={this.props.onDelete}
                onIncrement = {this. props.onIncrement} 
                onDecrement = {this.props.onDecrement}
                counter = {counter}
            />
            )}
            
        </div> );
    }
}
 
export default Counters;

