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
  turnTrue = id => {
console.log(id)
let score = this.state.Score;
let addScore = score + 1;
console.log(this.state.Score)
this.setState({Pokemon,
Score: addScore ,
...this.state.topScore})
  };
// ------My thoughts-------//
// if the score is greater than the topScore, then make the topScore equal to the score
  // on clicking a false card, set the card to true and shuffle the array of pokemon, and add 1 to the score
  // on clicking a true card, set all cards to false, shuffle the array, and set the score to 0
 //-----------------------//
    cardIsTrue = () => {

    };

    cardIsFalse = () => {};
  
  

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
