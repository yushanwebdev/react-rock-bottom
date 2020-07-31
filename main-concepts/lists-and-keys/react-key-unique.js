function Blog(props) {
	var sidebar = React.createElement(
		'ul',
		null,
		props.posts.map(function (post) {
			return React.createElement(
				'li',
				{ key: post.id },
				post.title
			);
		})
	);

	var content = props.posts.map(function (post) {
		return React.createElement(
			'div',
			{ key: post.id },
			React.createElement(
				'h3',
				null,
				post.title
			),
			React.createElement(
				'p',
				null,
				post.content
			)
		);
	});

	return React.createElement(
		'div',
		null,
		sidebar,
		React.createElement('hr', null),
		content
	);
}

var posts = [{ id: 1, title: 'Hello World', content: 'Welcome to learning React!' }, { id: 2, title: 'Installation', content: 'You can install React from npm.' }];

ReactDOM.render(React.createElement(Blog, { posts: posts }), document.getElementById('root'));