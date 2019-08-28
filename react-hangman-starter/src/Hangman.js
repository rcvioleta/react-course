import React, { Component } from 'react';
import './Hangman.css';
import img0 from './assets/images/hangman/0.png';
import img1 from './assets/images/hangman/1.png';
import img2 from './assets/images/hangman/2.png';
import img3 from './assets/images/hangman/3.png';
import img4 from './assets/images/hangman/4.png';
import img5 from './assets/images/hangman/5.png';
import img6 from './assets/images/hangman/6.png';
import { randomWord } from './words';
import AlphaButtons from './AlphaButtons';

class Hangman extends Component {
	/** by default, allow 6 guesses and use provided gallows images. */
	static defaultProps = {
		maxWrong: 6,
		letters: 'abcdefghijklmnopqrstuvwxyz',
		images: [ img0, img1, img2, img3, img4, img5, img6 ]
	};

	constructor(props) {
		super(props);
		this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
		this.handleGuess = this.handleGuess.bind(this);
		this.resetGame = this.resetGame.bind(this);
	}

	/** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
	guessedWord() {
		return this.state.answer.split('').map((ltr) => (this.state.guessed.has(ltr) ? ltr : '_'));
	}

	/** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
	handleGuess(evt) {
		console.log('handle guess triggered');
		let ltr = evt.target.value;
		this.setState((st) => ({
			guessed: st.guessed.add(ltr),
			nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
		}));
	}

	/** generateButtons: return array of letter buttons to render */
	// generateButtons() {
	// 	return 'abcdefghijklmnopqrstuvwxyz'.split('').map((ltr) => (
	// 		<button key={ltr} value={ltr} onClick={this.handleGuess} disabled={this.state.guessed.has(ltr)}>
	// 			{ltr}
	// 		</button>
	// 	));
	// }

	resetGame() {
		const currentState = { ...this.state };
		const updatedState = {
			...currentState,
			nWrong: 0,
			guessed: new Set(),
			answer: randomWord()
		};

		this.setState({ ...updatedState });
	}

	/** render: render game */
	render() {
		const isGameOver = this.state.nWrong === this.props.maxWrong;
		const isWinner = this.guessedWord().join('') === this.state.answer;
		const wrongAnswers = <p>Wrong Answers: {this.state.nWrong}</p>;
		const hangmanWord = isGameOver ? this.state.answer : this.guessedWord();
		let gameComponent = (
			<AlphaButtons letters={this.props.letters} handleGuess={this.handleGuess} guessed={this.state.guessed} />
		);

		if (isGameOver) gameComponent = 'GAME OVER!';
		if (isWinner) gameComponent = 'You Won!';

		return (
			<div className="Hangman">
				<h1>Hangman</h1>
				<img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong} wrong guesses`} />
				<p className="Hangman-word">{hangmanWord}</p>
				{wrongAnswers}
				<div className="Hangman-btns">{gameComponent}</div>
				<button onClick={this.resetGame} className="Reset-btn">
					Reset Game
				</button>
			</div>
		);
	}
}

export default Hangman;
