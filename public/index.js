
// Main App Component
var AppContainer = React.createClass({
  displayName: "AppContainer",
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Navbar, null),
      React.createElement(Carousel, null),
      React.createElement(HomePage, null),
      React.createElement(AboutPage, null),
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

// Home Page Component 
var HomePage = React.createClass({
  displayName: "HomePage",
  render: function render() {
    return React.createElement(
      "div",
      { className: "home-content container" },
      React.createElement(
        "h2",
        null,
        "Home"
      ),
      React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Quis hendrerit dolor magna eget est. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Fames ac turpis egestas integer eget. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Aliquam sem et tortor consequat id porta. In eu mi bibendum neque egestas congue quisque. Neque aliquam vestibulum morbi blandit cursus risus at. Integer eget aliquet nibh praesent tristique magna. Fermentum iaculis eu non diam phasellus vestibulum. Tristique risus nec feugiat in fermentum."
      ),
      React.createElement(
        "p",
        null,
        "At erat pellentesque adipiscing commodo. Integer feugiat scelerisque varius morbi enim nunc faucibus. Felis bibendum ut tristique et egestas. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Nisi lacus sed viverra tellus in. Et netus et malesuada fames. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Justo nec ultrices dui sapien eget mi proin sed. Bibendum est ultricies integer quis auctor elit sed vulputate. Gravida rutrum quisque non tellus orci ac auctor. Proin nibh nisl condimentum id venenatis. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Fringilla urna porttitor rhoncus dolor. Enim lobortis scelerisque fermentum dui faucibus in ornare. Ultrices in iaculis nunc sed augue lacus. Morbi quis commodo odio aenean sed. Hendrerit dolor magna eget est lorem ipsum dolor sit. Sed lectus vestibulum mattis ullamcorper."
      )
    );
  }
});

// About Page Component
var AboutPage = React.createClass({
  displayName: "AboutPage",
  render: function render() {
    return React.createElement(
      "div",
      { className: "about-content container" },
      React.createElement(
        "h2",
        null,
        "About"
      ),
      React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Quis hendrerit dolor magna eget est. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Fames ac turpis egestas integer eget. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Aliquam sem et tortor consequat id porta. In eu mi bibendum neque egestas congue quisque. Neque aliquam vestibulum morbi blandit cursus risus at. Integer eget aliquet nibh praesent tristique magna. Fermentum iaculis eu non diam phasellus vestibulum. Tristique risus nec feugiat in fermentum."
      )
    );
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
        { className: "container-fluid" },
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
