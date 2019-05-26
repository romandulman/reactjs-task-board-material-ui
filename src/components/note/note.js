import React, {Component} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import './note.css'

class note extends Component {

    handleRemove = () => {
        this.props.RemoveHandler(this.props.Id);
    };

    render() {
        return (
            <div className="noteBody" id={this.props.Id}>
                <Tooltip title="Remove Note" placement="top">
                    <CloseIcon className="CloseIco"  onClick={this.handleRemove}/>
                </Tooltip>
                <p><b>Task:</b><p className="outText"> {this.props.task}</p></p>
                <p><b>Date Time:</b></p>
                <p className="dateText"> {this.props.dateTime}</p>
            </div>
        )
    }
}


export default note;