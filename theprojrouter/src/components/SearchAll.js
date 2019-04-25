import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import App from '../App.js';

class SearchAll extends Component {
    constructor(props){
        super(props);
        this.state ={
            value: '',
            filteredData: '',
            toggler: false,
            selection: 'default',
            num: 1
        }
        this.handleChange=this.handleChange.bind(this)
        this.searchFunction=this.searchFunction.bind(this)
        this.onChange=this.onChange.bind(this)
        this.handleNumClick=this.handleNumClick.bind(this)
    }


//switch case?
   searchFunction = async(event) => {
        event.preventDefault();
        const searchables = ([...this.props.data])
        if(this.state.selection === 'call_resolution'){
            const results = searchables.filter(index => index.call_resolution.indexOf(this.state.value)>-1)
            await this.setState({filteredData: results});
        }
        else if (this.state.selection === 'agency'){
            let results = searchables.filter(index => index.agency.toLowerCase().indexOf(this.state.value.toLowerCase())>-1)
            await this.setState({filteredData: results});
        }
        else if (this.state.selection === 'brief_description'){
            let results = searchables.filter(index => index.brief_description.toLowerCase().indexOf(this.state.value.toLowerCase())>-1)
            await this.setState({filteredData: results});
        }
        else {
            let results = searchables.filter(index => index.brief_description.toLowerCase().indexOf(this.state.value.toLowerCase())>-1)
            await this.setState({filteredData: results});          
        }
    }

    onChange = async (event) => {
        event.preventDefault();      
        await this.setState({
            selection: event.target.value,
            toggler: true
        });
    }

    handleNumClick= async(event) => {
        event.preventDefault();
        const num = this.state.num
        await this.setState({ num: Math.floor(Math.random() * this.state.filteredData.length) + 1  })
    }
    
    handleChange = async(event) => {
        event.preventDefault();
        await this.setState({value: event.target.value, filteredData: '', num: 1});
        if(this.state.toggler === false){
            await this.setState({toggler: true, filteredData: '', num: 1});
        }
        else {
    }
}

    render() {
        const filteredData = this.state.filteredData
        const num = this.state.num
        const toggler = this.state.toggler
    if(filteredData.length >= 1 && filteredData[num] !== undefined)  {
        return (

    <div style={{ backgroundColor: "#90ee90"}}>
            <nav>
                <Link to="../App.js">Clear</Link>
            </nav>

            <Route exact path="../App.js" component={App} />
                <select defaultValue='brief_description' onChange={this.onChange}>
                    <option value="brief_description">please select an option</option>
                    <option value="brief_description">By Description</option>
                    <option value="agency">By Agency</option>
                    <option value="call_resolution">By Resolution</option>               
                </select>

            <form value = {this.state.value} onSubmit={this.searchFunction} style={{backgroundColor: 'teal'}}>
                <label style={{color: 'teal'}}>
                    Search All:
                    <input type="text" value={this.state.value} onChange={this.handleChange} style={{color: 'teal'}} />
                </label>
                    <input type="submit" value="Submit" />
            </form>

            <div>
                <button onClick={this.handleNumClick}>next call</button>
                <span style={{fontColor: "#a0522d"}}>{num} of {filteredData.length}</span>
            <div>
                <h2> AGENCY: </h2>
                <span> {filteredData[num].agency} </span>
            </div>

            <div>
                <h2> Description of call: </h2>
                <span> {filteredData[num].brief_description} </span>
            </div>

            <div>
                <span>
                    <h2> Date of Call: </h2>
                    <span> {filteredData[num].date} </span>
                    <h2> Time: </h2>
                    <span> {filteredData[num].time} </span>
                </span>
            </div>

            <div>
                <h2> TLDR: </h2>
                <span> {filteredData[num].inquiry_name} </span> 
            </div>

            <div>
                <h2> Resolution: </h2>
                <span> {filteredData[num].call_resolution} </span> 
            </div>

        </div>            
    </div>

    );}
    else if (filteredData !== '' && this.state.value.length >= 1 && filteredData.length <= 1){        
        return(

    <div style={{ backgroundColor: "#cd5c5c"}}>
            <nav>
                <Link to="../App.js">Clear</Link>
            </nav>

            <Route exact path="../App.js" component={App} />
                <select defaultValue='brief_description' onChange={this.onChange}>
                    <option value="brief_description">please select an option</option>
                    <option value="brief_description">By Description</option>
                    <option value="agency">By Agency</option>
                    <option value="call_resolution">By Resolution</option>               
                </select>

            <form value = {this.state.value} onSubmit={this.searchFunction}>
                <label>
                    Search All:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                    <input type="submit" value="Submit" />
            </form>

            <div>
                <h3 style={{alignContent: 'center', fontSize: 90, fontFamily: "impact" }}>no data found please try again</h3>
            </div>
    </div>

    )}
        else if (num  > filteredData.length - 1 && filteredData.length >= 1){
            return(

        <div style={{ backgroundColor: "#cd853f"}}>
            <nav>
                <Link to="../App.js">Clear</Link>
            </nav>

            <Route exact path="../App.js" component={App} />
                <select defaultValue='brief_description' onChange={this.onChange}>
                    <option value="brief_description">please select an option</option>
                    <option value="brief_description">By Description</option>
                    <option value="agency">By Agency</option>
                    <option value="call_resolution">By Resolution</option>               
                </select>

            <form value = {this.state.value} onSubmit={this.searchFunction}>
                <label>
                    Search All:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                    <input type="submit" value="Submit" />
            </form>

            <div>
                <h3 style={{alignContent: 'center', fontSize: 90, fontFamily: "impact" }}>I messed up</h3>
            </div>
        </div>
    )}
    else {
        return(
        <div style={{width: 600, minHeight: 300, backgroundColor: "#dcdcdc"}}>
            <nav style={{marginTop: 80}}>
                <Link to="../App.js">Clear</Link>
            </nav>

            <Route exact path="../App.js" component={App} />
                <select defaultValue='brief_description' onChange={this.onChange} style={{marginTop: 30}}>
                    <option value="brief_description">please select an option</option>
                    <option value="brief_description">By Description</option>
                    <option value="agency">By Agency</option>
                    <option value="call_resolution">By Resolution</option>               
                </select>

            <form value = {this.state.value} onSubmit={this.searchFunction} style={{marginTop: 30}}>
                <label>
                Search All:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <div>
                <h1 style={{fontFamily: 'comic sans', color: 'teal'}}> Please Select a Search Parameter</h1>
                <h3 style={{fontFamily: 'comic sans', color: 'teal'}}>then begin a search!</h3>
            </div>
        </div>   
            )
        }
    }
    }

export default SearchAll;
