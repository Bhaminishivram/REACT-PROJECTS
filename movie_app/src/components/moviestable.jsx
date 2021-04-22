import React, { Component } from 'react';
import Like from './like';

class MoviesTable extends Component {
    raiseSort = (path) => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path=path;
            sortColumn.order="asc"
        }
        this.props.onSort(sortColumn);
    }
    
    render() { 
        const {movies, onLike, onDelete} = this.props;
        return ( 
            <table className="table">
            <thead>
                <tr>
                    <th onClick={()=>this.raiseSort("title")}>title</th> 
                    <th onClick={()=>this.raiseSort("genre.name")}> Genre</th>
                    <th onClick={()=>this.raiseSort("numberInStock")}>Stock</th>
                    <th onClick={()=>this.raiseSort('dailyRentalRate')}>Rate</th> 
                    <th onClick>Like</th> 
                    <th onClick>Actions</th>
                </tr>
            </thead> 
            <tbody> 
                {movies.map(movie =>(
                 <tr key={movie._id}>
                 <td>{movie.title}</td>
                 <td>{movie.genre.name}</td> 
                 <td>{movie.numberInStock}</td>
                 <td>{movie.dailyRentalRate}</td>  
                 <td>
                     <Like 
                     likeStatus={movie.liked} 
                     onLikebutton={()=>
                      onLike(movie)}
                      />
                     </td>
                   <td>
                      <button onClick={() => onDelete(movie)}
                       className="btn btn-danger btn-sm">
                       Delete
                      </button>
                   </td>
                 
             </tr>
                 
                ))}
                
            </tbody>
        </table>  
 
         );
    }
}
 
export default MoviesTable;
// const moviesTable = (props) => { 
//     const{movies,onDelete,onLikebutton,handleLike,onSort}= props;
//     return ( 
    //     <table className="table">
    //        <thead>
    //            <tr>
    //                <th onClick={()=>onSort("title")}>title</th> 
    //                <th onClick={()=>onSort("genre.name")}> Genre</th>
    //                <th onClick={()=>onSort("numberInstock")}>Stock</th>
    //                <th onClick={()=>onSort('dailyReantalRate')}>Rate</th> 
    //                <th onClick>Like</th> 
    //                <th onClick>Actions</th>
    //            </tr>
    //        </thead> 
    //        <tbody> 
    //            {movies.map(movie =>(
    //             <tr key={movie._id}>
    //             <td>{movie.title}</td>
    //             <td>{movie.genre.name}</td> 
    //             <td>{movie.numberInStock}</td>
    //             <td>{movie.dailyRentalRate}</td>  
    //             <td>
    //                 <Like 
    //                 likeStatus={movie.liked} 
    //                 onLikebutton={()=>
    //                  handleLike(movie)}
    //                  />
    //                 </td>
    //               <td>
    //                  <button onClick={() => onDelete(movie)}
    //                   className="btn btn-danger btn-sm">
    //                   Delete
    //                  </button>
    //               </td>
                
    //         </tr>
                
    //            ))}
               
    //        </tbody>
    //    </table>  
    
//      );
// }
 
// export default moviesTable;