"use strict";

var details = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "Hey, these are some details you can now see!"
  )
);
var counter = false;

var showDetails = function showDetails() {
  counter = !counter;
  renderApp();
};

var renderApp = function renderApp() {
  var visible = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: showDetails },
      counter ? "Hide Details" : "Show Details"
    ),
    counter && details
  );

  ReactDOM.render(visible, document.getElementById('app'));
};

renderApp();
