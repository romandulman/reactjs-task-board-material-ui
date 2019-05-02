import React, {Component} from 'react';

import Note from '../../components/note/note'
import AddTask from '../../components/add-task/addTask'
import './'
class TaskList extends Component {
    constructor(props) {
        super(props);

        // save data in state
        this.state = {
            data: ["",""]

        }
    }

    simplifiedFunction  = () => {
        const data = this.state.data;
        let size = data.length + 1;
        data.push(size);

        this.setState({data});

    }

    render(){

        const data = this.state.data;
        return (
            <div className={}>
                <AddTask simplifiedFunction = {this.simplifiedFunction}  />                <div>
                                  <div>{data.map((number) =>
                                      <Note />

                                  )}</div>
                </div>
            </div>
        );
    }

}

export  default  TaskList