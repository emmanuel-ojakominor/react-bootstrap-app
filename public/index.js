
// Main App Component
var AppContainer = React.createClass({
  displayName: "AppContainer",
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Navbar, null),
      React.createElement(Carousel, null)
    );
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

// Carousel Component
var Carousel = React.createClass({
  displayName: "Carousel",
  render: function render() {
    return React.createElement(
      "div",
      { id: "carousel", className: "carousel slide", "data-ride": "carousel" },
      React.createElement(
        "div",
        { className: "carousel-inner" },
        React.createElement(
          "div",
          { className: "carousel-item active" },
          React.createElement("img", { src: "../../public/assets/img/img1.png", className: "d-block w-100", alt: "..." })
        ),
        React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { src: "../../public/assets/img/img2.png", className: "d-block w-100", alt: "..." })
        ),
        React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { src: "../../public/assets/img/img3.png", className: "d-block w-100", alt: "..." })
        )
      ),
      React.createElement(
        "a",
        { className: "carousel-control-prev", href: "#carousel", role: "button", "data-slide": "prev" },
        React.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
        React.createElement(
          "span",
          { className: "sr-only" },
          "Previous"
        )
      ),
      React.createElement(
        "a",
        { className: "carousel-control-next", href: "#carousel", role: "button", "data-slide": "next" },
        React.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
        React.createElement(
          "span",
          { className: "sr-only" },
          "Next"
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(AppContainer, null), document.querySelector('#AppRoot'));
