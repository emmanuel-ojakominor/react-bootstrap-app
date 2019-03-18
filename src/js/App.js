
// Main App Component
const AppContainer = React.createClass({
  render() {
    return (
      <Navbar />
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


ReactDOM.render(
  <AppContainer />,
  document.querySelector('#AppRoot')
);