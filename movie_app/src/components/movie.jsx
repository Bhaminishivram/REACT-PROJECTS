import  React ,{Component} from 'react' 
import {getMovies} from '../services/fakeMovieService';
class Movies extends  Component
{
    state={
        movies: getMovies()
     };
    render()
    {
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
                <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td> 
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                
            </tr>
                
               ))}
               
           </tbody>
       </table>



        );
    }
} 

export default Movies; 