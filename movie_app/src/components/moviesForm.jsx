import React from 'react'; 
const MovieForm = ({match,history}) => {
    return ( 
        <div>
        <h1> Movies From {match.params.id}</h1> 
        <button className="btn btn-primary" onClick={()=>{history.push('/movies')}}>save</button>
        </div>
    );
}

 
export default MovieForm;