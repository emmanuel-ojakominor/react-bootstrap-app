
const AppContainer = React.createClass({    
    render() {
      return (
        <div>
            <h1>React/Boostrap App</h1>
        </div>
      );
    } 
})    
  
ReactDOM.render(
    <AppContainer />,
    document.querySelector('#AppRoot')
);