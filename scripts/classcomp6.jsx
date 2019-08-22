import React, {Component} from 'react';

class Welcome extends React.Component{

    constructor(props){
        super(props);

        this.state = {value : 0};
    }

    /**componentDidMount(){
        this.setState({value : this.state.value + 1}, ()=>{
            console.log(this.state.value)
        })
        
    }*/
    componentDidMount(){
        this.setState((prevState, props)=>{
            return {value: prevState.value + 1}
        })

        this.setState((prevState, props)=>{
            return {value: prevState.value + 1}
        })
    }

    render(){
        return(
            <h1>my number is {this.state.value}</h1>
        )
    }
}
// ReactDOM.render(<Welcome/>, document.getElementById("start"));

export default Welcome;