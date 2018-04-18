import React, { Component } from 'react';
import Gamecard from "./Components/GameCard";
import Nav from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import game from "./Game.json";
import Swal from 'sweetalert'
import './App.css';


swal({
  
  title : "Hero clicking Game",
  text : "Click on the the Marvel Character ",
  badge : "https://media.giphy.com/media/xT5LMSXibBBVeJs6ZO/giphy.gif",
  button: "Unite!",
  clickAway : true 
});


  class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    game: game
};
  randomDisplay = id => {
    this.state.Game.forEach((image) => {
      if (image.id ===id) {
        if (image.clicked) {
          return({
            className : "Sorry",
            title : "Game Over!",
            text : "Chosen already!",
            badge: "https://www.flaticon.com/free-icon/marvel_826331#term=superheroes&page=1&position=3",
            button: "Nice Try !",
            clickHere : true 
          });
          this.setState({})
          this.resetGame();
          return false;
        } else {
          this.refreshScore();
          image.clicked = true;
        }
        if (this.state.score >= this.state.topScore) {
          this.newTopScore();
        }
      }
    });
  }

  randomPix = (array) => {
    let copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    this.setState({ game: copy });
  }

  refreshScore = () => {
    this.setState((newState) => ({
      score: newState.score + 1
    }), () => this.winning())
  }

  newTopScore = () => {
    this.setState((newState) => ({
      topScore: newState.score
    }))
  }

  wins = () => {
    if (this.state.score === this.state.game.length) {
      swal({
        className : "Wins",
        title : "Wins!",
        text : "Way to go",
        badge: "https://www.flaticon.com/free-icon/marvel_826331#term=superheroes&page=1&position=3",
        button: "Awesome!!!",
        clickHere : true 
      });
      this.setState({});
      this.resetGame();
  } else {
      setTimeout(() => {
        this.randomPix(this.state.game)
      }, 500);
    }
  }

  resetGame = () => {
    this.state.game.forEach((image) => {
      image.clicked = false;
    })
    this.setState({ score: 0 })
  }


  render() {

  return (

    <Wrapper>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        {this.state.game.map( hero => { 
            return <Gamecard
              {...hero}
              key={hero.id}
              newDisplay={this.newDisplay}
              randomPix={() => this.scatterCards(this.state.game)}
            />;
        })}
        
      </Wrapper>
  )};

}

export default App;