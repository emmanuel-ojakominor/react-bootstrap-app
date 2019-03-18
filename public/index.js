
var AppContainer = React.createClass({
    displayName: 'AppContainer',
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'React/Boostrap App'
            )
        );
    }
});

ReactDOM.render(React.createElement(AppContainer, null), document.querySelector('#AppRoot'));
