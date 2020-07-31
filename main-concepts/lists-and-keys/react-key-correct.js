function ListItem(props) {
	// Correct! There is no need to specify the key here:
	return React.createElement(
		'li',
		null,
		props.value
	);
}

function NumberList(props) {
	var numbers = props.numbers;
	var listItems = numbers.map(function (number) {
		return (
			// Correct! Key should be specified inside the array.
			React.createElement(ListItem, { key: number.toString(), value: number })
		);
	});
	return React.createElement(
		'ul',
		null,
		listItems
	);
}

var numbers = [1, 2, 3, 4, 5];
ReactDOM.render(React.createElement(NumberList, { numbers: numbers }), document.getElementById('root'));