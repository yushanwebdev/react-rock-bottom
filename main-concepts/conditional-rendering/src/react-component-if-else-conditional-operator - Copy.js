function Login(props) {
  return(
    <p>The user is <b>{props.isLoggedIn ? 'currently' : 'not'}</b> logged in.</p>
  );
}

ReactDOM.render(
  <Login isLoggedIn="true" />,
  document.getElementById('root')
);