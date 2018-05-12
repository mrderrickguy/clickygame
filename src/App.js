import React, { Component } from 'react';
import GameCard from "./Components/GameCard";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import game from "./Game.json";
import swal from 'sweetalert'
import './App.css';


swal({
  className : "Rule-is",
  title : "Hero clicking Game",
  text : "Click on the the Marvel Character ",
 icon : "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/ee/Transparent_AOU_Logo.png/revision/latest?cb=20150320024005",
  button: "Unite!",
  clickHere : true 
});


  class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    game:game
};
  randomDisplay = id => {
    this.state.game.forEach((image) => {
      if (image.id ===id) {
        if (image.clicked) {
          swal({
            className : "Sorry",
            title : "Game Over!",
            text : "HULK MAD!",
           icon: "https://i.pinimg.com/originals/ee/8f/c1/ee8fc11442b24e25fca31de25652d90e.png",
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
    }), () => this.wins())
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
       icon: "https://www.flaticon.com/free-icon/marvel_826331#term=superheroes&page=1&position=3",
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
        <Nav score={this.state.stopScore} topScore={this.state.topScore} />
        {this.state.game.map( hero => { 
            return <GameCard
              {...hero}
              key={hero.id}
             randomDisplay ={this.randomDisplay}
              randomPix={() => this.scatterCards(this.state.game)}
            />;
        })}
         <Footer />
      </Wrapper>
  )};

}

export default App;