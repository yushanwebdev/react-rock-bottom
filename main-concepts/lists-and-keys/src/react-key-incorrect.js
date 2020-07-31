function ListItem(props) {
	const value = props.value;
	return(
		// Wrong! There is no need to specify the key here:
		<li key={value.toString()}>
			{value}
		</li>
	);
}

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) =>
		// Wrong! The key should have been specified here:
		<ListItem value={number} />
	);
	return(
		<ul>
			{listItems}
		</ul>
	);
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById('root')
);