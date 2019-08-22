class Welcome extends React.Component{
    render(){
        return(
            <h1>Message: {this.props.Name}</h1>
            );
    }
}
ReactDOM.render(<Welcome Name="Solomon, you are very welcome"/>, document.getElementById("start"));
