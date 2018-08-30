class VisibilityToggle extends React.Component {
  constructor(props){
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
    this.details = <div><p>Hey, these are some details you can now see!</p></div>

  }
    handleToggleVisibility(){
      this.setState((prevState) => {
        return{
          visibility: !prevState.visibility
        }
      });
    }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details':'Show Details' }
        </button>
        {this.state.visibility && this.details}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))



// const details = <div><p>Hey, these are some details you can now see!</p></div>
// let counter = false;
//
// const showDetails = () => {
//   counter = !counter
//   renderApp()
// }
//
// const renderApp = () => {
//   const handleToggleVisibility = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetails}>{counter? "Hide Details":"Show Details"}</button>
//       {counter && details}
//     </div>
//       )
//
// ReactDOM.render(handleToggleVisibility, document.getElementById('app'))
// }
//
// renderApp()
