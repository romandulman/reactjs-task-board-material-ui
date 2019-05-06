import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './addTask.css';
import {MuiPickersUtilsProvider, TimePicker, DatePicker} from 'material-ui-pickers';

let tasks = [], task

class AddTask extends Component {
    state = {
        open: false,
        selectedDate: new Date('2019-04-29T21:11:54'),
        task: '',

    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});


    };
    handleSave = () => {
        this.setState({open: false});
        task = {
            Task: this.state.task,
            dateTime: String(this.state.selectedDate),

        };

      //  tasks.push(task)
      //  localStorage.setItem("TaskList", JSON.stringify(tasks))
       this.props.AddTaskHandler(task.Task, task.dateTime)

    };

    handleDateChange = date => {
        this.setState({selectedDate: date});
    };

    render() {
        const {classes} = this.props;
        const {selectedDate} = this.state;
        return (
            <div>
                <Fab  onClick={this.handleOpen} color="primary" aria-label="Add" className="fixedbutton">
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
                            onChange={(e) => {
                                this.setState({task: e.target.value})
                            }}
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
                        <Button onClick={this.handleSave} color="primary">
                            Publish Task
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddTask