
// Main App Component
var AppContainer = React.createClass({
  displayName: "AppContainer",
  render: function render() {
    return React.createElement(Navbar, null);
  }
});

// Navbar Component
var Navbar = React.createClass({
  displayName: "Navbar",
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "nav",
        { className: "navbar navbar-expand-md navbar-dark fixed-top bg-dark" },
        React.createElement(
          "a",
          { className: "navbar-brand", href: "#" },
          "ReactBootstrap"
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbarsExampleDefault" },
          React.createElement(
            "ul",
            { className: "navbar-nav mr-auto" },
            React.createElement(
              "li",
              { className: "nav-item active" },
              React.createElement(
                "a",
                { className: "nav-link", href: "#" },
                "Home"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                { className: "nav-link", href: "#" },
                "About"
              )
            )
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(AppContainer, null), document.querySelector('#AppRoot'));
