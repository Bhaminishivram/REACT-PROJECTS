// import React ,{Component} from 'react';   
  import React from 'react';
  
const list_group = (props) => {
    const{items,valueProperty,onGenreSelect,selectedItem, textProperty} = props;
    return ( 
            // <div class="list-group">
            //     <a href="#" class="list-group-item list-group-item-action active">testing
            //     </a>
            //     > <a href="#" class="list-group-item list-group-item-action">1</a>
            //    </div 
          <ul className="list-group">
                {items.map(item => 
                   <li key={item[valueProperty]} 
                      className={item===selectedItem? "list-group-item active" :"list-group-item"}
                   onClick={()=>onGenreSelect(item)}>
                       {item[textProperty]}
                       </li>)}
              
           </ul> 
           ); 
                } 
                //default property 
               list_group.defaultProps ={
               textProperty:"name",
               valueProperty:"_id"
        
}
 
export default list_group;