function Login(props) {
  return React.createElement(
    'p',
    null,
    'The user is ',
    React.createElement(
      'b',
      null,
      props.isLoggedIn ? 'currently' : 'not'
    ),
    ' logged in.'
  );
}

ReactDOM.render(React.createElement(Login, { isLoggedIn: 'true' }), document.getElementById('root'));