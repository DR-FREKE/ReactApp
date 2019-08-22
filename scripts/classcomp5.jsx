//UPDATING A STATE IN REACT
class Welcome extends React.Component{

    constructor(props){
        super(props);

        //initial state
        this.state = {message : this.props.message};
    }

    componentDidMount(){
        //updating the state
        this.setState({message: "hello world"})
    }

    render(){
        return(
            <div>
                <h3>the message we got is {this.state.message}</h3>
            </div>
        )
    }
}
ReactDOM.render(<Welcome message="Still there?" />, document.getElementById("start"));