import React ,{Component} from 'react';   
 
 // _ is the common convention 
 // lodash is the optimised version of a popular js library called underscore  
import _ from 'lodash'; 
import PropTypes from 'prop-types'; 


const Pagination = (props) => { 
  
    const{itemsCount, pageSize, currentPage,onPageChange}=props; 
    console.log(currentPage); 
  //[1,2,3].map()
  //[1... pagesCount].map()
  //const pagesCount = items/Count/pageSize; 

    const pagesCount = Math.ceil(props.itemsCount / props.pageSize); 
   // console.log("pagesCount"); 
    if(pagesCount ===1 ) return null; 
    const pages = _.range(1,pagesCount+1); // this returns array 
    //console.log(pages);
    return (
        <nav>
           <ul className="pagination">
               {pages.map(page => ( 
                 //<li key ={page} className= "page-item">
                   < li 
                   key={page}  
                   className={page === props.currentPage?'page-item active':'page-item'}>
                          <a 
                            onClick={() =>props.onPageChange(page)}
                         className="page-link" >
                           {page}
                           </a>
                           </li>
               ))} 
  </ul>
        </nav>
        ); 
  } 
  // props-type checking 
           Pagination.propTypes={
          itemsCount:PropTypes.number.isRequired, 
          pageSize:PropTypes.number.isRequired, 
          currentPage:PropTypes.number.isRequired,
          onPageChange:PropTypes.func.isRequired
        }

 
export default Pagination;