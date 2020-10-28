function Glossary(props) {
	return React.createElement(
		'dl',
		null,
		props.items.map(function (item) {
			return (
				// Fragments should also have a `key` prop when mapping collections
				React.createElement(
					React.Fragment,
					{ key: item.id },
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
				)
			);
		})
	);
}

ReactDOM.render(React.createElement(Glossary, { items: [{ id: '1', term: 'Batman', description: 'Wayne' }, { id: '2', term: 'Superman', description: 'Clark' }] }), document.getElementById('root'));