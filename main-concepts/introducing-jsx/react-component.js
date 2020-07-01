var name = 'Josh Perez';
var element = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Hello, ',
		name
	),
	React.createElement('img', { src: 'https://via.placeholder.com/150/' })
);

ReactDOM.render(element, document.getElementById('root'));