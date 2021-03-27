import  React ,{Component} from 'react' 
import {getMovies} from '../services/fakeMovieService';
class Movies extends  Component
{
    state={
        movies: getMovies()
     }; 
     handleDelete = (movie) => {
         const movies = this.state.movies.filter(m => m._id!== movie._id)
         this.setState({
             movies:movies
         })
     };
    render()
    { 
        if(this.state.movies.length === 0 )return <p>There is no movies in the database</p>;
         return(
           // <h1> Movies List</h1> 
              // <h1> {2*2*6}</h1> //regular experssion in react js  
              //<h1> {name} </h1> 
             // <h1> {this.state.count}</h1> 
             // <h1>{'my Name is ${name}'}</h1> 
       //<h1>Hello React</h1>  

       <table className="table">
           <thead>
               <tr>
                   <th>title</th> 
                   <th> Genre</th>
                   <th>Stock</th>
                   <th>Rate</th>
               </tr>
           </thead> 
           <tbody> 
               {this.state.movies.map(movie =>(
                <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td> 
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td> 
                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                
            </tr>
                
               ))}
               
           </tbody>
       </table>



        );
    }
} 

export default Movies; 