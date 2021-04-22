import React, { Component } from 'react'; 
import Tableheader from '../common/header';
import TableBody from '../common/tableBody'; 
const Table = (props) => { 
    const{onSort,data,columns,sortColumn}= props;
    return ( 
        <table className="table">
           
            <Tableheader 
            columns={columns}
            sortColumn= {sortColumn}
            onSort = {onSort}
            /> 

            <TableBody data={data} columns={this.columns} /> 
            </table>  
     );
}
 
export default Table;