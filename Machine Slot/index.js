class App extends React.Component {
	render() {
		return (
			<div>
				<Machine s1="apple" s2="banana" s3="cherry" />
				<Machine s1="orange" s2="orange" s3="orange" />
				<Machine s1="pineapple" s2="apple" s3="radish" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
