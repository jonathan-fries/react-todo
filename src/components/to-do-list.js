import React from 'react';
import ToDoTable from  './todotable';

export default class ToDoList extends React.Component{

    constructor(props){
        super(props);
        this.state = {todoitems:[]};

        var ws = "http://localhost:14173/data.json";

        var xhr = new XMLHttpRequest();
        xhr.open('GET', ws);
        xhr.onload = () => {
            if(xhr.status === 200){
                console.log(xhr.responseText);
                var local_todoitems = [];
                local_todoitems = JSON.parse(xhr.responseText);
                this.setState({todoitems:local_todoitems});
            }
            else{
                //error
            }
        };
        xhr.send();

    }

    render(){
        return <div>
            <ToDoTable todoitems={this.state.todoitems}/>
            <PrettyPrintJson todoitems={this.state.todoitems}/>
        </div>;
    }
}

class PrettyPrintJson extends React.Component {
    render() {
        // data could be a prop for example
        const data  = this.props.todoitems;
        return (<div><pre>{JSON.stringify(data, null, 2) }</pre></div>);
    }
}