function Names(props){
    return(
        <li>{props.name}</li>
    );
}

var myNames = ["Solomon", "Ndifereke", "Aniefiok"];
function App(){
    return(
        <div>
            <Names name={myNames[0]} />
            <Names name={myNames[1]} />
            <Names name={myNames[2]} />
        </div>
    );
}
var rootElement = document.getElementById("start");
ReactDOM.render(<App/>, rootElement);