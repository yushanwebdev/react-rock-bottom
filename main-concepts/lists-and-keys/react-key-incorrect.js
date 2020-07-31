function ListItem(props) {
	var value = props.value;
	return (
		// Wrong! There is no need to specify the key here:
		React.createElement(
			'li',
			{ key: value.toString() },
			value
		)
	);
}

function NumberList(props) {
	var numbers = props.numbers;
	var listItems = numbers.map(function (number) {
		return (
			// Wrong! The key should have been specified here:
			React.createElement(ListItem, { value: number })
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