import React from 'react';
import './note.css'

function note(props){
return(

    <div className="noteBody">
         <p>Hello, {props.name}</p>;
         <p>Hello, {props.datel}</p>;
         <p>Hello, {props.times}</p>;

    </div>
);

}

export default note;