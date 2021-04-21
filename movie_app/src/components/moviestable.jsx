import Like from './like'; 
const moviesTable = (props) => { 
    const{movies,onDelete,onLikebutton,handleLike,onSort}= props;
    return ( 
        <table className="table">
           <thead>
               <tr>
                   <th onClick={onSort}>title</th> 
                   <th onClick={onSort}> Genre</th>
                   <th onClick={onSort}>Stock</th>
                   <th onClick={onSort}>Rate</th> 
                   <th onClick={onSort}>Like</th> 
                   <th onClick={onSort}>Actions</th>
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
                     handleLike(movie)}
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
 
export default moviesTable;