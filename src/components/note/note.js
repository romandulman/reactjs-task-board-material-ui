import React, {Component} from 'react';
import './note.css'

class note extends Component {

    render() {
        return (
            <div className="noteBody">
                <p><b>Task:</b><div className="outText"> {this.props.task}</div></p>
                <p><b>Date Time:</b> {this.props.dateTime}</p>

            </div>
        )
    }
}

//<p>Hello, {this.props.times}</p>;

export default note;