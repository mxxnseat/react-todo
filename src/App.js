import React from "react";

import Header from "./components/header";
import List from "./components/list";

import "./scss/app.scss";

class App extends React.Component {
    constructor(props){
        super(props);

        this.addTask = this.addTask.bind(this);
        this.checkedHandler = this.checkedHandler.bind(this);
        this.state = {
            list: [],
        };
    }
    addTask(task){
        this.state.list.push({
            task,
            completed: true
        });
        this.setState({
            list: this.state.list
        });
    }
    checkedHandler(task){
        this.setState({
            list: this.state.list.filter(item=>item.task!=task)
        })
    }
    render(){
        return (
            <div className="app">
                <Header addTask={this.addTask} />
                <List checked={this.checkedHandler} list={this.state.list} />
            </div>
        );
    }
    
}


export default App;