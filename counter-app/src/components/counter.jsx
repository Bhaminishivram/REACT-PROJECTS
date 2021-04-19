import React, { Component } from 'react';

class Counter extends Component {
    //componentDidupdate 
    //this method  updated after the component is updated 
    // compare old state with new state , old props with the new props 
    //if there is a change we can make  a ajax request  to get the new data from the server  
    //if there is no change no request 
    componentDidUpdate(prevprops , prevstate)
    {
        console.log('prevProps', prevProps); 
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value)
        {
            //Axaj call and get new data from the server 
        }
    }
    render() {
        
        return (
            <div>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
               
            </div>
                );
    }
    formatCount() {
        const { value } = this.props.counter;
        const x = <h1>Zero</h1>; 
        return value === 0 ? x : value;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}
export default Counter;