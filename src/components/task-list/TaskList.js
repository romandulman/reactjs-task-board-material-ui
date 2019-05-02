import React, {Component} from 'react';

import Note from '../../components/note/note'
import AddTask from '../../components/add-task/addTask'

// let numbers = [{
//     name: "Leonardo",
//     nickName: "Leo",
//     weapon: "Katana",
//     imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
// }, 2, 3, 4, 5];
// let listItems
// let simplifiedFunction = () =>{
//   //  alert()
//
// }
//
// function TaskList(){
//      listItems = numbers.map((number) =>
//         <Note name={number.name} datel={number.nickName}/>
//
//     );
//
//         return (
//             <div>
//                 <AddTask simplifiedFunction = {simplifiedFunction}  />
//                 <div>{listItems}</div>
//             </div>
//
//         )
// };

class TaskList extends Component {
    constructor(props) {
        super(props);

        // save data in state
        this.state = {
            data: props.data


        }
    }

    addMore  = () => {
        const data = this.state.data;
        let size = data.length + 1;
        data.push(size);

        // udate data in state
        // will automatically call render method after update
        this.setState({data});
    }

    render(){
        // get data from state, not from props
        const data = this.state.data;
        return (
            <div>
                <button onClick={this.addMore}>ClickMe</button>
                <ul>
                    {data.map(i => <li key={i}>{i}</li> )}
                </ul>
            </div>
        );
    }

}
export  default  TaskList