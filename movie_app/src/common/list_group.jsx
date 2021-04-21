import React ,{Component} from 'react';   
 
const list_group = (props) => {
    return ( 
            // <div class="list-group">
            //     <a href="#" class="list-group-item list-group-item-action active">testing
            //     </a>
            //     > <a href="#" class="list-group-item list-group-item-action">1</a>
            //    </div 
               <ul>
                   {props.items.map(item => <li key={item._id} 
                   class="list-group-item list-group-item-action" onClick={props.onGenreSelect}>
                       {item.name}</li>)}
              
               </ul> 
           );
}
 
export default list_group;