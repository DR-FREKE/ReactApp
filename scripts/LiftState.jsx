import React, {Component} from 'react';

class Details extends React.Component{

    render(){
        return(
            <h1>{this.props.mDetails}</h1>
        );
    }
}

class Button extends React.Component{
    
    render(){
        return (
            <button style={this.props.active} onClick={this.props.myClickHandler}>{this.props.name}</button>
        )
    }
}

class MainApp extends React.Component{

    constructor(props){
        super(props);
        this.state = {ActiveArray:[false, false, false, false], datails: ""}
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(id, details){
        var newArray = [false, false, false, false];
        newArray[id] = true;
        this.setState({
            ActiveArray: newArray,
            details:details
        })
    }
    returnColor(id){
        var mColor = this.state.ActiveArray[id]?'red':'purple'

        return mColor;
    }

    render(){
        var content = ["One", "Two", "Three", "Four"]
        return(
            <div>
                {content.map((value, index)=><Button key={index} active={{color:this.returnColor(index)}} name={value} myClickHandler = {()=>{this.clickHandler(index, value)}}/>)}
                <Details mDetails={this.state.details}/>
            </div>
        )
    }
}

export default MainApp;