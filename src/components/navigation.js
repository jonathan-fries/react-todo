import React from 'react';
import {Link, Route} from "react-router-dom";
import Home from "./home";
import ToDoList from "./to-do-list";

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <div><nav><ul className="header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todolist">To Do List</Link></li>
            </ul></nav>
            {this.props.children}</div>;
    }

}