# project-unit2-react

####

**NYC 311 Inquiry**
**Charles Korpics**
**Unit-2 Project SEI**



Currently Deployed:

https://radiant-hollows-63402.herokuapp.com/

***the code is updated here within github - eliminating the bugs currently in SearchAll. Having various issues with pushing my updates to heroku and have imported the correct builds. Will attempt to correct this pushing issue before science fair***

Issues:

I need to put gif button and picture of 311 in a separate component. I do not mind the gif rendering button having use within every component - and could leave that static in app js upon preference. 

Discovered a seperate API today (04/25/19) that I linked within this app. I can do much more with this second APIand will be refactoring this Application extensively.

I did not expect many of the issues that came up during this production, and learned that verifying you can reach your application's potential with the data you are using - is where I should start first from now on.

Spent a good deal of my week starting other projects and hitting dead ends with them (API auth issues, API allowed num of calls) and had to rush back to this project as I just wanted something to be complete. 

Will continue working on this through the future and with new API - as the possibilities are vast with newly discovered data set. 

*Did attempt refactoring today and currently have two broken versions that I am experimenting with. May need to use it in separate project from scratch*



                          ***Link to rought draft of mock up (still making more of these)***
                          
                                          https://imgur.com/a/KvnSb5J

                                              ***Link to Api***

                    https://data.cityofnewyork.us/City-Government/311-Call-Center-Inquiry/tdd6-3ysr
                                            
                            *** Example of JSON object from above API in table format***
                            
    https://github.com/Korpics/project-unit2-react/blob/master/Screen%20Shot%202019-04-19%20at%2010.58.33%20AM.png

<h3>311 is a band and this is not about the band I am sorry</h3>

#### <h2>Overview</h2>

<h1>Find out about all 311 calls in NYC</h1>
                            
                        
Homepage will consist of five clickable route components that will render the data correlated with said component.

<h2>Components</h2>

 **Homepage/App.js** Navigation through out react Components. This Component (/app) will hold both the fetch call as well as the data initially fetched. All data use afterwards will be use as state below this component, but still leaving the initial state(after fetch runs which is on componentDidMount()) within App unmodified. 
 ___
 
 ___
 **RANDOM** button that renders the details of random 311 calls  
 
thought about this more - and I may use Random to display on a clean web page. Replacing the render is possible via state but may not be the cleanest approach.
   
 ___
 ___
 **SEARCH** a button that brings you to a clean web page where search parameters can be set to allow manual/detailed searching through the data set. Will be conducting conditionals that prevent the user from breaking this feature. 

Default search query will be under 'description'
___
___


#### <h2> Problems I expect</h2> ####

- This dataset is very large. I think I may need to look into the documentation to decide if I can specify a 'max date' parameter or if I need to conditionally work around that myself. 

- The algorithm to assign certain topics will be very much so time consuming - but I am genuinely interested in setting that up and maximizing it's sensibility. 

- There will need to be functionality that makes sure that the topic selected is the ONLY one selected. I do not want to worry about rendering a list of calls that fall under both 'this', and 'that' topic. 

- While considering the above potential issue - I also may need to be sure that the search function only allows one 'topic' to search/(map/filter) through - though I could imagine there is a way to allow more than one. Will know more of what I can and or can't do in this regard in a few days. 

***04/25/19 (code snippet from /app)***
```import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Random from "./components/Random"
import SearchAll from "./components/SearchAll"
import LinksToUseForRefactor from "./components/LinksToUseForRefactor"
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
    const resp = await fetch('https://data.cityofnewyork.us/resource/fhrw-4uyv.json');
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
    <div className="App" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>








                            
