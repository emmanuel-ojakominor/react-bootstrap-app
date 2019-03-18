
// Main App Component
var AppContainer = React.createClass({
  displayName: "AppContainer",
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Navbar, null),
      React.createElement(Carousel, null),
      React.createElement(Footer, null)
    );
  }
});

// Navbar Component
var Navbar = React.createClass({
  displayName: "Navbar",
  getDefaultProps: function getDefaultProps() {
    return {
      navbarBrand: "ReactBootstrap"
    };
  },
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
          this.props.navbarBrand
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
  },

  propTypes: {
    navbarBrand: React.PropTypes.string.isRequired
  }
});

// Carousel Component
var Carousel = React.createClass({
  displayName: "Carousel",
  getDefaultProps: function getDefaultProps() {
    return {
      img1: "../../public/assets/img/img1.png",
      img2: "../../public/assets/img/img2.png",
      img3: "../../public/assets/img/img3.png"
    };
  },
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
          React.createElement("img", { src: this.props.img1, className: "d-block w-100" })
        ),
        React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { src: this.props.img2, className: "d-block w-100" })
        ),
        React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { src: this.props.img3, className: "d-block w-100" })
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
  },

  propTypes: {
    img1: React.PropTypes.string.isRequired,
    img2: React.PropTypes.string.isRequired,
    img3: React.PropTypes.string.isRequired
  }
});

// Footer Component (Bootstrap Sticky Footer)
var Footer = React.createClass({
  displayName: "Footer",
  getDefaultProps: function getDefaultProps() {
    return {
      copyrightYearRange: "1998-2019"
    };
  },
  render: function render() {
    return React.createElement(
      "footer",
      { className: "footer mt-auto py-3" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "span",
          { className: "text-muted" },
          "\xA9 Emmanuel Ojakominor, ",
          this.props.copyrightYearRange,
          " "
        )
      )
    );
  },

  propTypes: {
    copyrightYearRange: React.PropTypes.string.isRequired
  }
});

ReactDOM.render(React.createElement(AppContainer, null), document.querySelector('#AppRoot'));
