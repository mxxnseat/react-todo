import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {input: ''};
        this.inputHandler = this.inputHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }
    inputHandler(e){
        this.setState({
            input: e.target.value
        });
    }
    clickHandler(){
        this.props.addTask(this.state.input);
        this.setState({
            input: ''
        })
    }
    render(){
        return <div className="header">
            <input
                type="text"
                className="header__input"
                onChange={this.inputHandler}
                value={this.state.input}
                placeholder="To-do title"
            />
            <button onClick={this.clickHandler} className="header__button-add button">add</button>
        </div>;
    }
}

export default Header;