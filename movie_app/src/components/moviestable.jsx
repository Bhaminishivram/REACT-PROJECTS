import Like from './like'; 
const moviesTable = (props) => { 
    const{movies,onDelete,onLikebutton,handleLike }= props;
    return ( 
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