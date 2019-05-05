import React, {Component} from 'react';
import './note.css'

class note extends Component {

    render() {
        return (
            <div className="noteBody">
                <p><b>Task:</b><p className="outText"> {this.props.task}</p></p>
                <p><b>Date Time:</b></p>
                <p className="dateText"> {this.props.dateTime}</p>
            </div>
        )
    }
}


export default note;