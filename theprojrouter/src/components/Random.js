import React, { Component } from 'react';

class Random extends Component {
    constructor(props){
        super(props);
        this.state ={
            num: 1        
        }
        this.handleClick=this.handleClick.bind(this)
        
    }

    handleClick(e){
    e.preventDefault();
    const num = this.state.num
    num ? this.setState({ num: Math.floor(Math.random() * 1000) + 1  }) : alert('idk anymore')
    }
   

    render() {
        const data = this.props.data
        const num = this.state.num
        if(data[num] === undefined){
            return (

     <div style={{ background: "red"}}>
        <h1>refresh.. I am sorry</h1>
        <button onClick={data.handleClick}>next call</button>

        <div>
            <h2 style={{fontStyle: "impact"}}> AGENCY: </h2>
            <span> undefined</span>
        </div>

        <div>
            <h2> Description of call: </h2>
            <span> undefined </span>
        </div> 

        <div>
                <h2> Date of Call: </h2>
                <span> undefined </span>
        </div>   

    </div> 
           
    );
} 

else return (

    <div>
        <button onClick={this.handleClick}>next call</button>
        <span> <h3>Call Number:{num}</h3> (out of 1000)</span> 

        <div>
            <h2 style={{fontFamily: "impact"}}>  AGENCY: </h2>
            <span> {data[num].agency} </span>
        </div>

        <div>
            <h2 style={{fontFamily: "impact"}}> Description of call: </h2>
            <span> {data[num].brief_description} </span>
        </div>

        <div>
            <span> 
                <h2 style={{fontFamily: "impact"}}> Date of Call: </h2>
                    <span> {this.props.data[num].date} </span>
                        <h2 style={{fontFamily: "impact"}}> Time: </h2>
                    <span> {this.props.data[this.state.num].time} </span>
            </span>
        </div>

        <div>
            <h2 style={{fontFamily: "impact"}}> TLDR: </h2>
            <span> {this.props.data[this.state.num].inquiry_name} </span> 
        </div>

        <div>
            <h2 style={{fontFamily: "impact"}}> Resolution: </h2>
            <span> {this.props.data[this.state.num].call_resolution} </span> 
        </div>

    </div> 

    )}
}

export default Random;