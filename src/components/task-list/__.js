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
            data: [1,1]


        }
    }

      addMore  = () => {
        const data = this.state.data;
        let size = data.length + 1;
        data.push(size);

        this.setState({data});

    }

    render(){

        const data = this.state.data;
        return (
            <div>
                <button onClick={this.addMore}>ClickMe</button>
                <ul>
                                  <div>{data.map((number) =>
                                      <Note />

                                  )}</div>
                </ul>
            </div>
        );
    }

}
let data =[1,2,3];

export  default  TaskList