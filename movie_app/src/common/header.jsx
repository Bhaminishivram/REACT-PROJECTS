import React, { Component } from 'react'; 
class Tableheader extends Component { 
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
     renderSortIcon = column => {
         const{sortColumn} =this.props; 
         if(column.path !== sortColumn.path) return null; 

         if(sortColumn.order ==='asc') return <i className="fa fa-sort-asc"></i> 
           return<i className="fa fa-sort-desc"></i>
     }

     render(){ 
        const {columns,onSort,sortColumn}= this.props;
        return ( 
            
             <thead>
                <tr> 
                    {columns.map(column=>
                       <th  
                       className="clickable"
                       key= {column.path || column.key} 
                       onClick={()=>this.raiseSort(column.path)}>{column.label} 
                       {this.renderSortIcon(column)}
                       </th> 
                        
                        
                    )}

                   {/* <th onClick={()=>this.raiseSort("title")}>title</th> 
                    <th onClick={()=>this.raiseSort("genre.name")}> Genre</th>
                    <th onClick={()=>this.raiseSort("numberInStock")}>Stock</th>
                    <th onClick={()=>this.raiseSort('dailyRentalRate')}>Rate</th> 
                    <th onClick>Like</th> 
                    <th onClick>Actions</th> */}
                </tr>
            </thead>  
            
       
         );
    }
}
 
export default Tableheader;