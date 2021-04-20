import React,{Component} from 'react'; 

class Like extends Component{
    render(){ 
        let classes = "fa fa-heart"; 
        if(!this.props.likeStatus) classes+='-o' 
        return (
            <i className={classes} onClick={this.props.onLikebutton}></i>
        );
    } 
} 
export default Like; 