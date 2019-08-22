function Starter(props){
    return(
        props.FirstName
    );
}
var element = <h1>Hello <Starter FirstName="Solomon"/></h1>
var rootElement = document.getElementById("start");
ReactDOM.render(element, rootElement);