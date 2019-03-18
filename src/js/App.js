
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
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">ReactBootstrap</a>
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
  }
});


// Carousel Component
const Carousel = React.createClass({
  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../../public/assets/img/img1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../../public/assets/img/img2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../../public/assets/img/img3.png" className="d-block w-100" alt="..." />
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
  }
});


// Footer Component (Bootstrap Sticky Footer)
const Footer = React.createClass({
  render() {
    return (
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">&copy; Emmanuel Ojakominor 2019</span>
        </div>
      </footer>
    )
  }
});


ReactDOM.render(
  <AppContainer />,
  document.querySelector('#AppRoot')
);