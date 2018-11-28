import React from 'react';

export default class ToDoRow extends React.Component{

    constructor(props) {
        super(props);

        this.handleDoneCheck = this.handleDoneCheck.bind(this);
    }

    handleDoneCheck(value){
        this.props.OnChangeDone(value);
    };

    render() {
        const todoitem = this.props.todoitem;

        return (
            <tr>
                <td>{todoitem.key}</td>
                <td>{todoitem.text}</td>
                <td><input type="checkbox" checked={todoitem.done}  onChange={() => this.handleDoneCheck(this.props.index)}  /></td>
            </tr>
        );
    }

}