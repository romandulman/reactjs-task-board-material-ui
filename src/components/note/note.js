import React, {Component} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './note.css'

class note extends Component {

handleRemove = (id) =>{
    this.props.RemoveHandler(id)

}
    render() {
        return (
            <div className="noteBody" id={this.props.Id}>
                <CloseIcon className="CloseIco" onClick={this.handleRemove(this.id)}/>
                <p><b>Task:</b><p className="outText"> {this.props.task}</p></p>
                <p><b>Date Time:</b></p>
                <p className="dateText"> {this.props.dateTime}</p>
            </div>
        )
    }
}


export default note;