import React, {Component} from 'react';
import './note.css'

class note extends Component {

    render() {
        return (
            <div className="noteBody">
                <p><b>Task:</b><p className="outText"> {this.props.task}</p></p>
                <p><b>Date Time:</b> {this.props.dateTime}</p>

            </div>
        )
    }
}

//<p>Hello, {this.props.times}</p>;

export default note;