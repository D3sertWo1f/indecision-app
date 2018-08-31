class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDeleteOptions(){
    this.setState(()=>{
      return{
        options: []
      };
    });
  };

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

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render() {
    console.log(this.state.options)
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

// class Header extends React.Component {
//   render() {
//     return  (
//
//     );
//   }
// }

const Action = (props) => {
  return(
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
    </div>
  );
}

// class Action extends React.Component {
//   render() {
//     return(
//       <div>
//         <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => <Option optionText={option} key={option}/>)
      }
    </div>
  );
}

// class Options extends React.Component {
//   render() {
//     return(
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option optionText={option} key={option}/>)
//         }
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return(
    <div>
      {
        props.optionText
      }
    </div>
  );
}

// class Option extends React.Component{
//   render() {
//     return (
//       <div>
//         {
//           this.props.optionText
//         }
//       </div>
//     );
//   }
// }

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

    this.setState(() => {
      return{error};
    });
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
