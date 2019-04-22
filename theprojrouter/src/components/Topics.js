import React, { Component } from 'react';

class Topics extends Component {
    constructor(props){
        super(props);
        this.state ={
            other: [],
            violent: [],
            auto: [],
            inquiry: [],
            Noise: [],
            num: 1
            
        }
        this.handleClick=this.handleClick.bind(this)
        
    }

    handleClick(e){
    const num = this.state.num
    const plusOne = this.state.num ? this.setState({ num: num + 1}) : alert('idk anymore')
    console.log(this.state.num)
    }
    

    render() {
        const {num} = this.state.num
        return (
            <div>
                <button onClick={this.handleClick}>next call</button>
               <p>hey thanks for clicking bud</p>
               <p>
               <h1> AGENCY: </h1>
               <span> {this.props.data[{num}].agency} </span>
               <h1> Description of call: </h1>
               <span> {this.props.data[0].brief_description} </span>
               <h1> Date of Call: </h1>
               <span> {this.props.data[0].date} </span>
               </p> 
            </div>
        );
    }
}

export default Topics;