class Welcome extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>Welcome, Mr.{this.props.Name}</div>
        )
    }
}
var mName = "Solomon";
ReactDOM.render(<Welcome Name={mName}/>, document.getElementById("start"));