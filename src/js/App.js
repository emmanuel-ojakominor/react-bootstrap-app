
// Main App Component
const AppContainer = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <Footer />
      </div>
    );
  }
});


// Navbar Component
const Navbar = React.createClass({
  getDefaultProps() {
    return {
      navbarBrand: "ReactBootstrap"
    }
  },
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">{this.props.navbarBrand}</a>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  },  
  propTypes: {
    navbarBrand: React.PropTypes.string.isRequired
  }
});


// Carousel Component
const Carousel = React.createClass({
  getDefaultProps() {
    return {
      img1: "../../public/assets/img/img1.png",
      img2: "../../public/assets/img/img2.png",
      img3: "../../public/assets/img/img3.png"
    }
  },
  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={this.props.img1} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={this.props.img2} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={this.props.img3} className="d-block w-100" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  },
  propTypes: {
    img1: React.PropTypes.string.isRequired,
    img2: React.PropTypes.string.isRequired,
    img3: React.PropTypes.string.isRequired
  }
});


// Footer Component (Bootstrap Sticky Footer)
const Footer = React.createClass({
  getDefaultProps() {
    return {
      copyrightYearRange: "1998-2019",
    }
  },
  render() {
    return (
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">&copy; Emmanuel Ojakominor, {this.props.copyrightYearRange} </span>
        </div>
      </footer>
    )
  },
  propTypes: {
    copyrightYearRange: React.PropTypes.string.isRequired
  }
});


ReactDOM.render(
  <AppContainer />,
  document.querySelector('#AppRoot')
);