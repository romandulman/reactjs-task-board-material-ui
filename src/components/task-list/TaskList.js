import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Note from '../../components/note/note'
import AddTask from '../../components/add-task/addTask'
import './tasklist.css'
let arr,count = 0
class TaskList extends Component {
    constructor(props) {
        super(props);

        // save data in state
        this.state = {
            data: [
                {   Id: '',
                    Task: 'Example',
                    dateTime: 'example Date and time'
                }
            ]

        }
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem("TaskList"))
        this.setState({data});
    }

    AddTaskHandler = (task, DateTime) => {
        count ++

        const data = this.state.data;
        arr = {
            Id: count,
            Task: task,
            dateTime: DateTime
        };
        data.push(arr);
        this.setState({data});
        localStorage.setItem("TaskList", JSON.stringify(data))
        alert(count)

    };


    RemoveHandler = (id) =>{
      //  alert(id)
    }

    render() {
        const data = this.state.data;
        return (
            <div>
                <Container>
                    <AddTask AddTaskHandler={this.AddTaskHandler}/>
                    <Row>
                        {
                            data.map((notes) =>

                                <Col sm={4}> <Note RemoveHandler={this.RemoveHandler} Id={notes.Id} task={notes.Task} dateTime={String(notes.dateTime)}/> </Col>
                            )}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TaskList