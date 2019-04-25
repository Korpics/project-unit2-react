import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Random from "./components/Random"
import SearchAll from "./components/SearchAll"
import Footer from "./components/Footer"
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
    }
  catch (err) {
      return alert('fetch broken.');
    }  
  }
  onHandleClick = async(event) => {
    event.preventDefault();
    const click = !this.state.clicked
      await this.setState({ clicked: click })
  }

  onNextClick = (event) => {
    event.preventDefault();
    this.theSetter();
    const nextint = this.state.next + 1
    if(nextint > 3){
      this.setState({ next: 0 })
      } 
      else {
      this.setState({ next: nextint })
    }
  }

    theSetter(){
      if(this.state.next === 1){
        this.setState({ src: "https://i.imgur.com/fg91vTt.gif" })
      }
      else if (this.state.next === 2) {
        this.setState({ src: "https://i.imgur.com/PowEW42.gif" })
      }
      else {
        this.setState({ src: "http://i.imgur.com/zivxHE1.gif" })
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
            <h3><Link to="/components/Random"style={{justifyContent: 'space-around', margin: 'auto', fontFamily: "tahoma"}}>RANDOM CALL!!</Link></h3>
            <h3><Link to="/components/SearchAll"style={{justifyContent: 'space-around', margin: 'auto', fontFamily: "tahoma"}}>Search All</Link></h3>
            <h3><Link to="/components/Footer"style={{justifyContent: 'space-around', margin: 'auto', fontFamily: "tahoma"}}>Data from 2010 to Present(visual & json)</Link></h3>             
        </nav>

        <article>
          <Route exact path="/components/Random" component={
          () => (<Random data={this.state.data} num={this.state.num} />
        )}/>
          <Route exact path="/components/SearchAll" component={
          () => (<SearchAll data={this.state.data} num={this.state.num} />
        )}/>
          <Route exact path="/components/Footer" component={
          () => (<Footer data={this.state.data} />
        )}/>

          <button onClick={this.onHandleClick}>how I feel about the API I used</button>

          <div>
            <h2 style={{fontFamily: "impact", color: '#b22222'}}>hey look it's the wrong 311</h2>
            <img src="https://i.imgur.com/as3a05k.jpg" alt="shucks" height="300" width="600"></img>
          </div>

          <div>
            <span style={{fontFamily: 'impact', fontSize: 10}}> pssstttt </span>
          </div>

          <div>
            <span style={{fontFamily: 'impact', fontSize: 13}}> (this is about '311 calls' not '311 songs') </span>
          </div>

      </article>
    </div>
)}
else {
  return(

    <div className="App" style={{display: 'flex', justifyContent: 'center', justifyContent: 'space-evenly', flexDirection: 'column'}}>

        <nav>
            <h3><Link to="/components/Random"style={{justifyContent: 'space-around', margin: 'auto', fontFamily: "tahoma"}}>RANDOM CALL!!</Link></h3>
            <h3><Link to="/components/SearchAll"style={{justifyContent: 'space-around', margin: 'auto', fontFamily: "tahoma"}}>Search All</Link></h3>
            <h3><Link to="/components/Footer"style={{justifyContent: 'space-around', margin: 'auto', fontFamily: "tahoma"}}>Data from 2010 to Present(visual & json)</Link></h3>             
        </nav>

        <article>

          <Route exact path="/components/Random" component={
          () => (<Random data={this.state.data} num={this.state.num} />
          )}/>

          <Route exact path="/components/SearchAll" component={
          () => (<SearchAll data={this.state.data} num={this.state.num} />
          )}/>

          <Route exact path="/components/Footer" component={
          () => (<Footer data={this.state.data} />
          )}/>

          <container style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', justifyContent: 'space-between'}}>
            <span>
              <button onClick={this.onHandleClick}>clear image</button>
            </span>
            <div> 
              <img src={this.state.src} alt="shucks" height="400" width="400"></img> 
            </div>
              <button onClick={this.onNextClick}>Next</button>
          </container> 

        </article>
    </div>
  )}}
}


export default App;

  
