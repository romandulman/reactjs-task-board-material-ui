import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Note from '../../components/note/note'
import AddTask from '../../components/add-task/addTask'

let arr;

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    Task: 'Example Task',
                    dateTime: 'Example Date and time'
                }
            ]

        }
    }
    AddTaskHandler = (task, DateTime) => {
        const data = this.state.data;
        arr = {
            Task: task,
            dateTime: DateTime
        };
        data.push(arr);
        this.setState({data});
        localStorage.setItem("TaskList", JSON.stringify(data))

    };
    RemoveHandler = (id) => {
        const data = this.state.data;
        data.splice(id, 1);
        localStorage.removeItem("TaskList");
        localStorage.setItem("TaskList", JSON.stringify(data));
        this.setState({data});
    };


    componentDidMount() {

        let data = JSON.parse(localStorage.getItem("TaskList"));
        if (data != null) this.setState({data});

    }

    render() {
        return (
            <div>
                <Container>
                    <AddTask AddTaskHandler={this.AddTaskHandler}/>
                    <Row>
                        {
                            this.state.data.map((notes, index) =>

                                <Col sm={4}> <Note key={index} RemoveHandler={this.RemoveHandler} Id={index}
                                                   task={notes.Task} dateTime={String(notes.dateTime)}/> </Col>
                            )}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TaskList
