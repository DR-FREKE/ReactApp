class Welcome extends React.Component{

    constructor(props){
        super(props);

        this.state = {name:this.props.name, age: 456};
    }
    render(){
        return(
            <div>Hello I'm {this.state.name != "Solomon"? <div><strong>{this.state.name}</strong></div> : <div></div>}, I'm {this.state.age} years old</div>
        )
    }
}
ReactDOM.render(<Welcome name="Solomon"/>, document.getElementById("start"));