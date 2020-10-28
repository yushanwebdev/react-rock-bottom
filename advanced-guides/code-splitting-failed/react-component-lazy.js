var OtherComponent = React.lazy(function () {
    return import('./OtherComponent');
});

ReactDOM.render(React.createElement(OtherComponent, null), document.getElementById('react-container'));