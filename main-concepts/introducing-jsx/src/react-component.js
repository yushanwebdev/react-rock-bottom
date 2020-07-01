const name = 'Josh Perez';
const element = (
	<div>
	<h1>Hello, {name}</h1>
	<img src="https://via.placeholder.com/150/" />
	</div>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);