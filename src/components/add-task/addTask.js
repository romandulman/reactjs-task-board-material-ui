import React ,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
 class AddTask extends Component {
    state = {
        open: false,
        selectedDate: new Date('2014-08-18T21:11:54'),

    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
     handleDateChange = date => {
         this.setState({ selectedDate: date });
     };

    render() {
        const { classes } = this.props;
        const { selectedDate } = this.state;
        return (

            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
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
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddTask