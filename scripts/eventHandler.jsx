class EventHandler extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:0};
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({value : this.state.value+1}, ()=>{
            console.log("updated!");
        });
    }

    render(){
        return(
            <button onClick={this.clickHandler}>{this.state.value}</button>
        );
    }
}
ReactDOM.render(<EventHandler/>, document.getElementById("start"));