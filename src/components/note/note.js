import React, {Component} from 'react';
import './note.css'

class note extends Component{

render(){
return(
    <div className="noteBody" >
         <p>Hello, {this.props.name}</p>;
         <p>Hello, {this.props.datel}</p>;
         <p>Hello, {this.props.times}</p>;

    </div>
)
}
}

export default note;