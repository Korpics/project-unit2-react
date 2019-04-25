import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Random from "./Random"
import SearchAll from "./SearchAll"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: [{}],
      clicked: false,
      next: 0,
      src: "http://i.imgur.com/zivxHE1.gif"
    }

    this.getFetch=this.getFetch.bind(this);
    this.theSetter=this.theSetter.bind(this);
  }

  async getFetch() {
    try {
    const resp = await fetch('https://data.cityofnewyork.us/resource/wewp-mm3p.json');
    const data = await resp.json();
    const data1 = data;
    this.setState({
      data: data1
      });
      return console.log(this.state.data,'api call');
    }
  catch (err) {
      return console.log('fetch broken.');
    }  
  }
  onHandleClick = async(event) => {
    event.preventDefault();
    const click = !this.state.clicked
      await this.setState({ clicked: click })
    console.log(click)
  }

  onNextClick = (event) => {
    event.preventDefault();
    this.theSetter();
    const nextint = this.state.next + 1
    if(nextint > 3){
      this.setState({ next: 0 })
      } else {
      this.setState({ next: nextint })
    console.log(this.state.next)
    }
  }

    theSetter(){
      if(this.state.next === 1){
      this.setState({ src: "https://i.imgur.com/fg91vTt.gif" })
       console.log('thesetter', this.state.src)
      }
      else if (this.state.next === 2) {
      this.setState({ src: "https://i.imgur.com/PowEW42.gif" })
       console.log('thesetter', this.state.src)
      }
      else {
      this.setState({ src: "http://i.imgur.com/zivxHE1.gif" })
       console.log('thesetter', this.state.src)
      }
    }

  componentDidMount(){
  this.getFetch();
  this.theSetter();
}

render() {
  if(this.state.clicked === false){
  return(
    <div className="App" style={{display: 'flex', justifyContent: 'center', justifyContent: 'space-evenly', flexDirection: 'column'}}>
        <nav>
            <h3><Link to="/Random" style={{justifyContent: 'space-around', margin: 'auto'}}>RANDOM CALL!!</Link></h3>
            <h3><Link to="/SearchAll"style={{justifyContent: 'space-around', margin: 'auto'}}>Search All</Link></h3>           
        </nav>
      <article>
    <Route exact path="/Random" component={
    () => (<Random data={this.state.data} num={this.state.num} />
)}/>
    <Route exact path="/SearchAll" component={
    () => (<SearchAll data={this.state.data} num={this.state.num} />
)}/>

      <button onClick={this.onHandleClick}>how I feel about the API I used</button>
      </article>
    </div>
  )
}
else {
  return(
    <div className="App" style={{display: 'flex', justifyContent: 'center', justifyContent: 'space-evenly', flexDirection: 'column'}}>
        <nav>
            <h3><Link to="/Random" style={{justifyContent: 'space-around', margin: 'auto'}}>RANDOM CALL!!</Link></h3>
            <h3><Link to="/SearchAll"style={{justifyContent: 'space-around', margin: 'auto'}}>Search All</Link></h3>           
        </nav>
      <article>
    <Route exact path="/Random" component={
    () => (<Random data={this.state.data} num={this.state.num} />
)}/>
    <Route exact path="/SearchAll" component={
    () => (<SearchAll data={this.state.data} num={this.state.num} />
)}/>
    <container style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', justifyContent: 'space-between'}}>
      <span><button onClick={this.onHandleClick}>clear image</button></span>
     <div> <img src={this.state.src} alt="shucks" height="400" width="400"></img> </div>
     <button onClick={this.onNextClick}>Next</button>
    </container>     
      </article>
    </div>
  )
}
}
}


export default App;

  
