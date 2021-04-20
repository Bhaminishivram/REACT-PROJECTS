import  React ,{Component} from 'react' ;
 
  // functional components 
const Like = (props) => { 
    let classes = "fa fa-heart"; 
    if(!props.likeStatus) classes+= '-o';
    return ( 
        <i className={classes} onClick={props.onLikebutton} style ={{cursor:'pointer'}}></i>
     );
}
 
export default Like;





     // class component 
// class Like extends Component{
//     render(){ 
//         let classes = "fa fa-heart"; 
//         if(!this.props.likeStatus) classes+='-o' 
//         return (
//             <i className={classes} onClick={this.props.onLikebutton} style ={{cursor:'pointer'}}></i>
//         );
//     } 
// } 
// export default Like;  



// note : this use only for class component