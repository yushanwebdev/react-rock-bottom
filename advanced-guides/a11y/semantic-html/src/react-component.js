function ListItem({ item }) {
	return (
		<React.Fragment>
			<dt>{item.term}</dt>
			<dd>{item.description}</dd>
		</React.Fragment>

	);
}

function Glossary(props) {
	return (
		<dl>
			{
				props.items.map(item => (
					<ListItem item={item} key={item.id} />
				))
			}
		</dl>
	);
}

ReactDOM.render(
	<Glossary items={[
		{ id: '1', term: 'Batman', description: 'Wayne' },
		{ id: '2', term: 'Superman', description: 'Clark' }
	]} />,
	document.getElementById('root')
);