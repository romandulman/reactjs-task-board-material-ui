import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Note from '../../components/note/note'
import AddTask from '../../components/add-task/addTask'
import './tasklist.css'
let arr;
class TaskList extends Component {
    constructor(props) {
        super(props);

        // save data in state
        this.state = {
            data: [
                {
                    Task: 'Example',
                    dateTime: 'example Date and time'
                }
            ]

        }
    }

    componentDidMount() {


    }
    simplifiedFunction = (task, DateTime) => {
        const data = this.state.data;
        arr = {
            Task: task,
            dateTime: DateTime
        };

        data.push(arr);
        this.setState({data});
    };



    render() {
        const data = this.state.data;
        return (
            <div>
                <Container>
                    <AddTask simplifiedFunction={this.simplifiedFunction}/>
                    <Row>
                        {
                            data.map((notes) =>

                                <Col sm={4}> <Note task={notes.Task} dateTime={String(notes.dateTime)}/> </Col>
                            )}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TaskList