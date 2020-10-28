function ListItem(_ref) {
	var item = _ref.item;

	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			'dt',
			null,
			item.term
		),
		React.createElement(
			'dd',
			null,
			item.description
		)
	);
}

function Glossary(props) {
	return React.createElement(
		'dl',
		null,
		props.items.map(function (item) {
			return React.createElement(ListItem, { item: item, key: item.id });
		})
	);
}

ReactDOM.render(React.createElement(Glossary, { items: [{ id: '1', term: 'Batman', description: 'Wayne' }, { id: '2', term: 'Superman', description: 'Clark' }] }), document.getElementById('root'));