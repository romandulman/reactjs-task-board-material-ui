import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Note from '../../components/note/note'
import AddTask from '../../components/add-task/addTask'
import './tasklist.css'

class TaskList extends Component {
    simplifiedFunction = (task, DateTime) => {
        const data = this.state.data;
        let size = {
            Task: task,
            dateTime: DateTime
        }

        //data.length + 1;
        data.push(size);
        this.setState({data});
    }

    constructor(props) {
        super(props);

        // save data in state
        this.state = {
            data: [
                {
                    Task: 'ff',
                    dateTime: 'w'
                }
            ]

        }
    }

    render() {
        const data = this.state.data;
        return (
            <Container>
                <AddTask simplifiedFunction={this.simplifiedFunction}/>
                <Row>
                    {data.map((number) =>
                        <Col sm={4}> <Note task={number.Task}/> </Col>
                    )}
                </Row>
            </Container>
        );
    }
}

export default TaskList