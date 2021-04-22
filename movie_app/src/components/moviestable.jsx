import React, { Component } from 'react';
import Tableheader from '../common/header';
import Like from './like';

class MoviesTable extends Component {
     columns =[
          {path:'title', label:'Title'},
          {path:'genre.name', label:'Genre'},
          {path:'numberInStock', label:'Stock'},
          {path:'dailyRentalRate', label:'Rate'},
          {Key:'Like'},
          {key:'Action'}

     ]
    
    render() { 
        const {movies, onLike, onDelete,onSort,sortColumn} = this.props;
        return ( 
            <table className="table">
           
            <Tableheader 
            columns={this.columns}
            sortColumn= {sortColumn}
            onSort = {onSort}
            />
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