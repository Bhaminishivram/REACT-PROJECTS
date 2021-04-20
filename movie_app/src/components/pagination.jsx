import React ,{Component} from 'react';  
import _ from 'lodash';

const Pagination = (props) => { 
    const pageCount = Math.ceil(props.itemsCount / props.pageSize); 
    console.log("pageCount"); 
    if(pageCount ===1 ) return null; 
    const pages = _.range(1,pageCount+1); // this returns array 
    console.log(pages);
    return (
        <nav>
           <ul className="pagination">
               {pages.map(page => (
                   <li className="page-item"><a className="page-link" href="#">{page}</a></li>
               ))} 
  </ul>
        </nav>
        );
}
 
export default Pagination;