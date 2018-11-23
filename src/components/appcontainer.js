import {Route} from "react-router-dom";
import Home from "./home";
import ToDoList from "./to-do-list";
import React from 'react';
import Navigation from './navigation';

export default class Nav extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <Navigation>
                <Route exact path="/" component={Home}/>
                <Route path = "/todolist" component = {ToDoList} />
            </Navigation>;
    }
}