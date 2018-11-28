import React from 'react';
import ToDoRow from './todorow';

export default class ToDoTable extends React.Component{

    constructor(props) {
        super(props);
        //this.handleDoneChannge = this.handleDoneChannge.bind(this);
        this.handleDoneChange = this.handleDoneChange.bind(this);

    }

    handleDoneChange(value){
        this.props.OnDoneChange(value);
    }

    render() {

        const rows = [];

        this.props.todoitems.forEach((todoitem) => {
            rows.push(
                <ToDoRow key={todoitem.key} index={todoitem.key} todoitem={todoitem} OnChangeDone={this.handleDoneChange}/>
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>To Do:</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }

}

