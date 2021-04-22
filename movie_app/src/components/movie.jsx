import  React ,{Component} from 'react' 
import {getMovies} from '../services/fakeMovieService'; 
import Like from './like'; 
import Pagination from '../common/pagination'; 
import {Paginate} from '../utils/paginate';  
import List_group from  '../common/list_group';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviestable'; 
import _ from 'lodash'; 
class Movies extends  Component
{
    state={
       // movies:getMovies(),  
        movies:[], 
        genres:[],
        currentPage:1,
        pageSize:4, 
        sortColumn:{path:'title',order:'asc'}
     };   
     componentDidMount(){ 
       const genres =[{_id:"",name:"All Genres"}, ...getGenres()]

         this.setState(
             {
                 movies:getMovies(), 
                 genres:genres
             }
         )
     } 
     handleGenreSelect =(genre)=> {
        //console.log('genreselected') 
        this.setState({
            selectedGenre :genre ,
            currentPage:1
        })
     }

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
handleSort =(sortColumn) => {
    this.setState({
        sortColumn
    })
}
     
    render()
    {  
        const{length:count} =this.state.movies 
        const {pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn} = this.state;  
        const filtered =selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id): allMovies;
        const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
        const movies = Paginate( sorted,currentPage,pageSize);
        if(this.state.movies.length === 0 )return <p>There is no movies in the database</p>;
     return(
           // <h1> Movies List</h1> 
              // <h1> {2*2*6}</h1> //regular experssion in react js  
              //<h1> {name} </h1> 
             // <h1> {this.state.count}</h1> 
             // <h1>{'my Name is ${name}'}</h1> 
       //<h1>Hello React</h1>   
       <React.Fragment>
              <div style={{marginTop:30}}>
               <div className="row">
                   <div className="col-3">
                    <List_group items={this.state.genres} 
                     onGenreSelect={this.handleGenreSelect}
                     selectedItem ={this.state.selectedGenre} 
                     textProperty = "name"
                     valueProperty = "_id"
                     />
                   </div>
                   <div className="col">
             <h3> Showing {filtered.length } movies in the database </h3> 
             <MoviesTable
             sortColumn={sortColumn} 
             movies={movies} 
             onLike={this.handleLike} 
             onDelete={this.handleDelete} 
             onSort={this.handleSort}/> 
       {/* <table className="table">
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
     */}
       <Pagination
      itemsCount={filtered.length}  
     // itemsCount = "abc" //this is to check propsType Error  
    currentPage = {this.state.currentPage}
    pageSize={this.state.pageSize}
    onPageChange={this.handlePageChange}/> 
                   </div>
               </div>
           </div>


        

  </React.Fragment> 


        );
    }
} 

export default Movies; 