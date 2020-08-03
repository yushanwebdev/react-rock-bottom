ReactDOM.render(<input value="hi" />, document.getElementById('root'));

setTimeout(function() {
	ReactDOM.render(<input value={null} />, document.getElementById('root'));
}, 1000);