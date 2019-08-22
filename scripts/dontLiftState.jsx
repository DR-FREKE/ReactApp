import React, {Component} from 'react';

class Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {ActiveState:false, details:""}
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(details){
        // this.setState({
        //     ActiveState:true,
        //     details:details
        // })

        this.setState((prevState, props)=>{
            if(prevState.ActiveState == 0){
                return {ActiveState:prevState.ActiveState+1}
            }else if(prevState.ActiveState == 1){
                return{ActiveState:prevState.ActiveState-1}
            }
        })
    }
    returnColor(){
        var mColor = this.state.ActiveState?'red':'purple';

        return mColor;
    }

    render(){
        return(
            <button style={{color:this.returnColor()}} onClick={()=>{this.clickHandler(this.props.mDetails)}}>{this.props.mDetails}</button>
        )
    }
}

class StateApp extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
               <Button mDetails="Latest"/>
               <Button mDetails="Oldest"/> 
            </div>
        )
    }
}

export default StateApp;