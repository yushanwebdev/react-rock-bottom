const OtherComponent = React.lazy(() => import('./OtherComponent'));

ReactDOM.render(
    <OtherComponent />,
    document.getElementById('react-container')
);