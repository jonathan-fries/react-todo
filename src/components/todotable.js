import Navigation from "./navigation";
import {Route} from "react-router-dom";
import Home from "./home";
import ToDoList from "./to-do-list";

import React from 'react';
import ToDoRow from './todorow';

export default class ToDoTable extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {

        const rows = [];

        this.props.todoitems.forEach((todoitem) => {
            rows.push(
                <ToDoRow todoitem={todoitem}/>
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

