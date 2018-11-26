import React from 'react';
import ToDoTable from  './todotable';

export default class ToDoList extends React.Component{

    constructor(props){
        super(props);
        this.state = {todoitems:[]};
    }

    render(){

        var ws = "http://localhost:14173/data.json";
        var todoitems = [];

        var xhr = new XMLHttpRequest();
        xhr.open('GET', ws);
        xhr.onload = () => {
          if(xhr.status === 200){
              console.log(xhr.responseText);
              this.setState({todoitems:JSON.parse(xhr.responseText)});
              //console.log(state:{todoitems});
          }
          else{
              //error
          }
        };
        xhr.send();

        return <ToDoTable todoitems={todoitems}/>;
    }
}