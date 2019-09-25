import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
// import Container from './components/container/container';
import Row from './components/Row/row';
import Card from './components/Card/card';
import Wrapper from './components/Wrapper/wrapper';
import Pokemon from './pokemon.json';

class App extends Component {
  state = {
    Pokemon,
    Score: 0,
    topScore: 0
  };


// A function that will make the selected cards clicked property true
  turnTrue = clicked => {
if (clicked === false) {
   clicked = true;
  this.cardIsFalse()
}
else if (clicked === true) {this.cardIsTrue()}
};
// ------My thoughts-------//
//When any card is clicked, check if it is false, if clicked is false, turn it true add to the score and randomly order the cards.
//if clicked is true when the card is clicked, then reset the score, set all cards to false, and reorder them.
 //-----------------------//
    cardIsTrue = () => {
      

    };

    cardIsFalse = () => {
      let score = this.state.Score;
let addScore = score + 1;
this.setState({Pokemon,
Score: addScore ,
...this.state.topScore});
this.shuffle(Pokemon)
    };

  //This will shuffle the cards/pokemon. Credits to Fisher Yates algorithm 
  shuffle = (array) => {
    let i = array.length, j, temporary;
    while(i-- > 0) {
      j = Math.floor(Math.random() * (i));
      temporary = array[j];
      array[j] = array[i]
      array[i] = temporary
    }
  };
  

  render() {
    return (
      <div>
        <Navbar
        score={this.state.Score} />
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
