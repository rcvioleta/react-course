class Machine extends React.Component {
	render() {
		const { s1, s2, s3 } = this.props;
		const winner = s1 === s2 && s2 === s3;
		return (
			<div className="Machine">
				<div className="Machine-box">
					<div>{s1}</div>
					<div>{s2}</div>
					<div>{s3}</div>
				</div>
				<p className={winner ? 'Machine-box Machine-winner' : 'Machine-box Machine-losser'}>
					{winner ? 'Congrats! You win!' : 'Sorry... You lose!'}
				</p>
			</div>
		);
	}
}
