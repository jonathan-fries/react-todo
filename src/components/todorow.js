import React from 'react';

export default class ToDoRow extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        const todoitem = this.props.todoitem;

        return (
            <tr>
                <td>{todoitem.id}</td>
                <td>{todoitem.text}</td>
                <td><input type="checkbox" /></td>
            </tr>
        );
    }

}