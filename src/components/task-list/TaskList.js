import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Note from '../../components/note/note'
import AddTask from '../../components/add-task/addTask'


class TaskList extends Component {

    state = {
        data: []
    };

    AddTaskHandler = (task, DateTime) => {
       let arr = {
            Task: task,
            dateTime: DateTime
        };
        this.setState ({
            data: [...this.state.data, arr]
        },
        () => localStorage.setItem("TaskList", JSON.stringify(this.state.data))
        )
    };

    RemoveHandler = (id) => {
        const data = this.state.data;
        data.splice(id, 1);
        localStorage.setItem("TaskList", JSON.stringify(data));
        this.setState({data});
    };

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem("TaskList"));
        if (data != null) this.setState({data});
    };

    render() {
        return (
            <div>
                <Container>
                    <AddTask AddTaskHandler={this.AddTaskHandler}/>
                    <Row>
                        {
                            this.state.data.map((notes, index) =>

                                <Col sm={4}> <Note  RemoveHandler={this.RemoveHandler} noteId={index}
                                                   task={notes.Task} dateTime={String(notes.dateTime)}/> </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        );
    };
}

export default TaskList;
