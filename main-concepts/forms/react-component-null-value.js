ReactDOM.render(React.createElement('input', { value: 'hi' }), document.getElementById('root'));

setTimeout(function () {
	ReactDOM.render(React.createElement('input', { value: null }), document.getElementById('root'));
}, 1000);