import React, { Component } from 'react';

class SquareButton extends React.Component{

    render(){
        return(
            <button className="btnTicTac">
                {/**this.props.name*/}
            </button>
        )
    }
}
class Board extends React.Component{

    constructor(props){
        super(props);

        this.state = {name:this.props.title, age: 45};
    }
    RenderSquare(i){
        var stat = document.getElementById("");
        return(
            <SquareButton/>
        )
    }
    render(){
        return(
            <div className="Board">
                <div className="status" id="stat">{this.state.name}</div>
                <div className="boardRow">
                    {this.RenderSquare(1)}
                    {this.RenderSquare(2)}
                    {this.RenderSquare(3)}
                </div>
                <div className="boardRow">
                    <SquareButton />
                    <SquareButton />
                    <SquareButton />
                </div>
                <div className="boardRow">
                    <SquareButton />
                    <SquareButton />
                    <SquareButton />
                </div>
            </div>
        )
    }
}

export default Board;