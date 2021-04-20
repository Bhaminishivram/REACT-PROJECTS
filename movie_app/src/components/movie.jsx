import  React ,{Component} from 'react' 
import {getMovies} from '../services/fakeMovieService'; 
import Like from './like'; 
import Pagination from '../common/pagination'; 
import {Paginate} from '../utils/paginate';
class Movies extends  Component
{
    state={
        movies:getMovies(), 
        currentPage:1,
        pageSize:4
     };  

     handleLike = (movie) => {
     // console.log("Liked "); 
     const movies =[...this.state.movies]; 
     const index = movies.indexOf(movie); 
     movies[index]= {...movies[index]}; 
     movies[index].liked = !movies[index].liked; 
     this.setState({movies});

     }
     handleDelete = (movie) => {
         const movies = this.state.movies.filter(m => m._id!== movie._id)
         this.setState({
         movies:movies
         })
        }

     handlePageChange =(page) => {
        // console.log("page changed"); 
        this.setState({
          currentPage:page
        })
     }
     
    render()
    {  
        const{length:count} =this.state.movies 
        const {pageSize, currentPage, movies: allMovies } = this.state; 
        const movies = Paginate(allMovies,currentPage,pageSize);
        if(this.state.movies.length === 0 )return <p>There is no movies in the database</p>;
         return(
           // <h1> Movies List</h1> 
              // <h1> {2*2*6}</h1> //regular experssion in react js  
              //<h1> {name} </h1> 
             // <h1> {this.state.count}</h1> 
             // <h1>{'my Name is ${name}'}</h1> 
       //<h1>Hello React</h1>   
       <React.Fragment>
<h3> Showing {this.state.movies.length } movies in the database </h3>
       <table className="table">
           <thead>
               <tr>
                   <th>title</th> 
                   <th> Genre</th>
                   <th>Stock</th>
                   <th>Rate</th> 
                   <th>Like</th> 
                   <th>Actions</th>
               </tr>
           </thead> 
           <tbody> 
               {movies.map(movie =>(
                <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td> 
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>  
                <td><Like likeStatus={movie.liked} onLikebutton={()=>this.handleLike(movie)}/></td>
                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                
            </tr>
                
               ))}
               
           </tbody>
       </table> 
       <Pagination itemsCount={count} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/> 
  </React.Fragment>


        );
    }
} 

export default Movies; 