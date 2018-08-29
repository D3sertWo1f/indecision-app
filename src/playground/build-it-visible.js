const details = <div><p>Hey, these are some details you can now see!</p></div>
let counter = false;

const showDetails = () => {
  counter = !counter
  renderApp()
}

const renderApp = () => {
  const visible = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetails}>{counter? "Hide Details":"Show Details"}</button>
      {counter && details}
    </div>
      )

ReactDOM.render(visible, document.getElementById('app'))
}

renderApp()
