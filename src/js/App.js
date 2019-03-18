
// App Container Component
const AppContainer = React.createClass({
  getInitialState() {
    return {
      page: 'home'
    }
  },
  render() {    
    if (this.state.page == 'home') {
      currentPage = <HomePage />
    }
    else if (this.state.page == 'about') {
      currentPage = <AboutPage />
    }

    return (
      <div>
        <Navbar
          page={this.state.page}
          homeClick={() => this.setState({page: 'home'})}
          aboutClick={() => this.setState({page: 'about'})}
        />
        {this.state.page == 'home' ? <Carousel /> : ''}
        {currentPage}
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
              <li className={this.props.page == 'home' ? 'active nav-item' : ''}>
                <a onClick={this.props.homeClick} className="nav-link" href="#">Home</a>
              </li>
              <li className={this.props.page == 'about' ? 'active nav-item' : ''}>
                <a onClick={this.props.aboutClick} className="nav-link" href="#">About</a>
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


// Home Page Component 
const HomePage = React.createClass({
  render() {
    return (
      <div className="home page container">
        <h2>Home</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Quis hendrerit dolor magna eget est. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Fames ac turpis egestas integer eget. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Aliquam sem et tortor consequat id porta. In eu mi bibendum neque egestas congue quisque. Neque aliquam vestibulum morbi blandit cursus risus at. Integer eget aliquet nibh praesent tristique magna. Fermentum iaculis eu non diam phasellus vestibulum. Tristique risus nec feugiat in fermentum.
          </p>

        <p>
          At erat pellentesque adipiscing commodo. Integer feugiat scelerisque varius morbi enim nunc faucibus. Felis bibendum ut tristique et egestas. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Nisi lacus sed viverra tellus in. Et netus et malesuada fames. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Justo nec ultrices dui sapien eget mi proin sed. Bibendum est ultricies integer quis auctor elit sed vulputate. Gravida rutrum quisque non tellus orci ac auctor. Proin nibh nisl condimentum id venenatis. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Fringilla urna porttitor rhoncus dolor. Enim lobortis scelerisque fermentum dui faucibus in ornare. Ultrices in iaculis nunc sed augue lacus. Morbi quis commodo odio aenean sed. Hendrerit dolor magna eget est lorem ipsum dolor sit. Sed lectus vestibulum mattis ullamcorper.
          </p>
      </div>
    )
  }
});


// About Page Component
const AboutPage = React.createClass({
  render() {
    return (
      <div className="about page container">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Quis hendrerit dolor magna eget est. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Fames ac turpis egestas integer eget. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Aliquam sem et tortor consequat id porta. In eu mi bibendum neque egestas congue quisque. Neque aliquam vestibulum morbi blandit cursus risus at. Integer eget aliquet nibh praesent tristique magna. Fermentum iaculis eu non diam phasellus vestibulum. Tristique risus nec feugiat in fermentum.
          </p>
      </div>
    )
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
      <footer className="footer">
        <div className="container-fluid">
          <p className="text-muted">&copy; Emmanuel Ojakominor, {this.props.copyrightYearRange} </p>
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