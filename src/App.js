import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
// import Container from './components/container/container';
import Row from './components/Row/row';
import Card from './components/Card/card';
import Wrapper from './components/Wrapper/wrapper';
import Pokemon from './pokemon.json';
// import { all } from 'q';

class App extends Component {
  state = {
    Pokemon,
    Score: 0,
	topScore: 0,
	gameStatus: 'Click A Card To Start!'
  };


// A function that will make the selected cards clicked property true
  turnTrue = id => {
	console.log(id)
    const card = document.getElementById(`${id}`);
    const cardStatus = card.getAttribute("status");

    if ( cardStatus === "false") {
    	card.setAttribute("status", "true");
  		this.cardIsFalse();
    }
	else if (cardStatus === "true") {
    	const allCardsArr = document.getElementsByClassName("pokemon");
    	for (let i = 0; i < allCardsArr.length; i++) {
    		allCardsArr[i].setAttribute("status", "false")
    	};
  		this.cardIsTrue()
	}
};
// ------My thoughts-------//
//When any card is clicked, check if it is false, if clicked is false, turn it true add to the score and randomly order the cards.
//if clicked is true when the card is clicked, then reset the score, set all cards to false, and reorder them.
 //-----------------------//
    cardIsTrue = () => {
		const status = document.getElementById('game-status');
		status.classList.add('yellow')
		setTimeout(() => status.classList.remove('yellow'), 500)
    	this.shuffle(Pokemon);
      	this.setState({
		Score: 0,
		gameStatus: 'Bad Guess! Try Again.'
      	});
    };

    cardIsFalse = () => {
		const status = document.getElementById('game-status');
		status.classList.add('green')
		setTimeout(() => status.classList.remove('green'), 500)
		let newScore = this.state.Score + 1;
		this.setState({
			Score: newScore,
			gameStatus: 'Good Guess!'
		});
		if (newScore > this.state.topScore) { this.setState({topScore: newScore}) }

		if (newScore === 15) {this.winGame()}

		this.shuffle(Pokemon);
	};

	winGame = () => {
		this.setState({
			gameStatus: 'YOU WIN!!!'
		});
		const status = document.getElementById('game-status');
		const flash = setInterval(() => {
				status.classList.add('green');
				setTimeout(() => status.classList.remove('green'), 500);
			}, 1000);

		const allCardsArr = document.getElementsByClassName("pokemon");
			for (let i = 0; i < allCardsArr.length; i++) {
				allCardsArr[i].setAttribute("status", "false")
			};	
			
		setTimeout(() => {
			this.setState({Score: 0})
			clearInterval(flash)
		}, 3100);
	};

  	//This will shuffle the cards/pokemon. Credits to Fisher Yates algorithm 
  	shuffle = (array) => {
    	let i = array.length, j, temporary;
    	while(i-- > 0) {
      		j = Math.floor(Math.random() * (i));//decimal * array length -> rounded down to the nearest whole number
      		temporary = array[j];
      		array[j] = array[i];
      		array[i] = temporary;
    	};
  	};
  

  render() {
    return (
      <div>
        <Navbar
        score={this.state.Score}
		topScore={this.state.topScore}
		gameStatus={this.state.gameStatus}
		/>
        <Jumbotron />
        <Wrapper>
          <Row>
          {this.state.Pokemon.map(monster => (
            <Card 
                  turnTrue={this.turnTrue}
                  key={monster.id} 
                  image={monster.image}     
                  name={monster.name}
                  clicked={monster.clicked}
                  id={monster.id}
                  />
          ))}
          </Row>
        </Wrapper>
      </div>
      
    );
  }
}

 

export default App;
