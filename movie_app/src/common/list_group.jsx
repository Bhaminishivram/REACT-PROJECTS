import React ,{Component} from 'react';   
 
const list_group = () => {
    return ( 
  <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    testing
  </a>
  <a href="#" class="list-group-item list-group-item-action">1</a>
  <a href="#" class="list-group-item list-group-item-action">2</a>
  <a href="#" class="list-group-item list-group-item-action">3</a>
  <a href="#" class="list-group-item list-group-item-action disabled">4</a>
 </div>  

      );
}
 
export default list_group;