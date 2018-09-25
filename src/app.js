import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
    constructor(props){
      super(props)
      console.log(props)
      this.state={ 
        options: props.options
      }
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handlePick = this.handlePick.bind(this)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }
  
    handleDeleteOptions(){
      this.setState(() => ({options: []}));
    };
  
    handleDeleteOption(optionToRemove){
      this.setState((prevState)=>({
        options: prevState.options.filter(option => option !== optionToRemove)
      }))
    }
  
    handlePick(){
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[randomNum]
      alert(option)
    }
  
    handleAddOption(option){
      if(!option){
        console.log("error")
        return 'Please insert a valid string';
      } else if (this.state.options.indexOf(option) > -1){
        console.log("error")
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
  
    render() {
      console.log(this.state.options)
      const subtitle = 'Put your life in the hands of a computer';
      return(
        <div>
          <Header  subtitle={subtitle}/>
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption}/>
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  }
  
  const Header = (props) => {
    return(
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  }
  
  Header.defaultProps = {
    title: 'Indecision'
  };
  
  const Action = (props) => {
    return(
      <div>
        <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
      </div>
    );
  }
  
  const Options = (props) => {
    return(
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
          props.options.map((option, index) => (
            <Option
              optionText={option}
              key={index}
              handleDeleteOption = {props.handleDeleteOption}
            />
          ))
        }
      </div>
    );
  }
  
  const Option = (props) => {
    return(
      <div>
        {
          props.optionText
        }
        <button
          onClick={(e) => props.handleDeleteOption(props.optionText)}>
          Remove
        </button>
      </div>
    );
  }
  
  class AddOption extends React.Component {
    constructor(props){
      super(props)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.state={error: undefined}
    }
  
    handleAddOption(e){
      e.preventDefault()
      const option = e.target.elements.option.value.trim()
      const error = this.props.handleAddOption(option)
      console.log(error)
  
      this.setState(() => ({error}));
    }
  
    render(){
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type='text' name='option'/>
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(<IndecisionApp />,document.getElementById('app'))
  