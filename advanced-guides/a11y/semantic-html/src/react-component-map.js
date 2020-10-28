function Glossary(props) {
	return (
		<dl>
			{
				props.items.map(item => (
					// Fragments should also have a `key` prop when mapping collections
					<React.Fragment key={item.id}>
						<dt>{item.term}</dt>
						<dd>{item.description}</dd>
					</React.Fragment>
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