import React, { Component } from 'react';

class AlphaButtons extends Component {
	render() {
		const buttons = this.props.letters.split('').map((letter, index) => {
			return (
				<button
					key={index}
					value={letter}
					onClick={this.props.handleGuess}
					disabled={this.props.guessed.has(letter)}
				>
					{letter}
				</button>
			);
		});
		return <div>{buttons}</div>;
	}
}

export default AlphaButtons;
