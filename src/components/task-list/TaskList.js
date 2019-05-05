import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Note from '../../components/note/note'
import AddTask from '../../components/add-task/addTask'
import './tasklist.css'

class TaskList extends Component {
    simplifiedFunction = (task, DateTime) => {
        const data = this.state.data;
        let arr = {
            Task: task,
            dateTime: DateTime
        }
          ;
        //data.length + 1;
       data.push(arr);
      //  alert(arr.dateTime)
     this.setState({data});
    }

    constructor(props) {
        super(props);

        // save data in state
        this.state = {
            data: [
                {
                    Task: '',
                    dateTime: '2019-04-29T21:11:54'
                }
            ]

        }
    }

    render() {
        const data = this.state.data;
        return (
            <div>
            <Container>
                <AddTask simplifiedFunction={this.simplifiedFunction}/>
                <Row>
                    {data.map((number) =>
                        <Col sm={4}> <Note task={number.Task} dateTime={number.dateTime}/> </Col>
                    )}
                </Row>
            </Container>
            </div>
        );
    }
}

export default TaskList