class Header extends React.Component {
  render() {
    return  (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer.</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return(
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Header />
    <Header />
  </div>
);

ReactDOM.render(jsx,document.getElementById('app'))
