import React from 'react';
import ToDoTable from  './todotable';

export default class ToDoList extends React.Component{

    constructor(props){
        super(props);
        this.state = {todoitems:[]};

        this.handleDoneChange = this.handleDoneChange.bind(this);

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

    handleDoneChange(value){
        this.setState(state => {
            const todoitems = state.todoitems.map((item, j) =>
            {
                if (j+1 === value) {
                    item.done = !item.done;
                    return item;
                } else
                    return item;

            });
            return todoitems;
        });
    }

    render(){
        return <div>
            <ToDoTable OnDoneChange={this.handleDoneChange} todoitems={this.state.todoitems}/>
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