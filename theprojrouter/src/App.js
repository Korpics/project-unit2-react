import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Topics from './components/Topics'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: [{
        agency: '',
        date: '',
        brief_description: ''
      }],
      topics: [],
      other: [],
      violence: [],
      auto: [],
      animals: [],
      utility: [],
      

    }

    this.handleClicker=this.handleClicker.bind(this);
  }



async handleClicker(e) {
    try {
    const resp = await fetch('https://data.cityofnewyork.us/resource/wewp-mm3p.json');
    const data = await resp.json();
    const data1 = data;
    this.setState({
      data: data1
    });
    return console.log(this.state.data,'that is the data');
  }
  catch (err) {
    return console.log('hey there didnt work bud');
  }
  }

componentWillMount(){
  console.log('im runnin')

}

render() {
  return(
    <div className="App">
        <nav>
          <button onClick={this.handleClicker}>go get that data yo</button>
          <p>
            <Link to="/components/Topics">Topics</Link>
          </p>
        </nav>
      <main>
      <Route path="/components/Topics" component={
    () => (<Topics data={this.state.data} num={this.state.num} />
)}/>
      </main>
    </div>
  )
}
}
export default App;
