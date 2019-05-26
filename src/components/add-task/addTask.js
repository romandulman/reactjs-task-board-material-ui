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
import Tooltip from '@material-ui/core/Tooltip';
import './addTask.css';
import {MuiPickersUtilsProvider, TimePicker, DatePicker} from 'material-ui-pickers';

class AddTask extends Component {
    state = {
        open: false,
        selectedDate: new Date('2019-04-29T21:11:54'),
        task: '',
    };

    handleView = () => {
        (this.state.open) ? this.setState({open: false}) : this.setState({open: true});
    };

    handleSave = () => {
        this.handleView();
        let task = {
            Task: this.state.task,
            dateTime: String(this.state.selectedDate),
        };
       this.props.AddTaskHandler(task.Task, task.dateTime)
    };
    
    render() {
        return (
            <div>
                <Tooltip title="Add Task Note" placement="right-start">
                    <Fab  onClick={this.handleView} color="primary" aria-label="Add" className="fixedbutton">
                        <AddIcon/>
                    </Fab>
                </Tooltip>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleView}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
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
                                    name="selectedDate"
                                    value={this.state.selectedDate}
                                    onChange={(e) => {
                                        this.setState({selectedDate: e})
                                    }}
                                />
                                <TimePicker
                                    margin="normal"
                                    label="Time picker"
                                    value={this.state.selectedDate}
                                    onChange={(e) => {
                                        this.setState({selectedDate: e})
                                    }}/>
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleView} color="primary">
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

export default AddTask;