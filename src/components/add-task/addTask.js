import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './addTask.css';
import {MuiPickersUtilsProvider, TimePicker, DatePicker} from 'material-ui-pickers';

class AddTask extends Component {
    state = {
        open: false,
        selectedDate: new Date('2019-04-29T21:11:54'),
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
     //   alert(this.data.name)
        this.props.simplifiedFunction(this.data.name,this.data.datel,this.data.times)
    };
    handleDateChange = date => {
        this.setState({selectedDate: date});
    };
    data = {
        'name':1,
        'datel':2,
        'times':3
    }

    dd =()=>{
        localStorage.setItem("ls",JSON.stringify(this.data))
    }
    render() {
        const {classes} = this.props;
        const {selectedDate} = this.state;

        return (
            <div>
                <Fab onClick={this.handleOpen} color="primary" aria-label="Add" className="fixedbutton">
                    <AddIcon/>
                </Fab>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Task..."
                            type="text"
                            fullWidth
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <DatePicker
                                    margin="normal"
                                    label="Date picker"
                                    value={selectedDate}
                                    onChange={this.handleDateChange}
                                />
                                <TimePicker
                                    margin="normal"
                                    label="Time picker"
                                    value={selectedDate}
                                    onChange={this.handleDateChange}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Publish Task
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddTask