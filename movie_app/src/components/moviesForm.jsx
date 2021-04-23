import React from 'react'; 
const MovieForm = ({match}) => {
    return (  
        <h1> Movies From {match.params.id}</h1>
    );
}

 
export default MovieForm;