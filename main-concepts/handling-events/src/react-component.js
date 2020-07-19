class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.  // Warning: this is *experimental* syntax.
  test = 'yushan'
  handleClick = () => {    console.log('this is:', this.test);  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

ReactDOM.render(
  <LoggingButton />,
  document.getElementById('root')
);