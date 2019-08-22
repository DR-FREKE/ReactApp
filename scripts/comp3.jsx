function LineItems(props){
    return(
        <td>{props.names}</td>
    );
}
//var myNames = ["Solomon", "Ndifereke", "Aniefiok"];
function AppNames(props){
    return(
        <tr>
            <LineItems names={props.myNames[0]}/>
            <LineItems names={props.myNames[1]}/>
            <LineItems names={props.myNames[2]}/>
        </tr>
    )
}
function AppHead(props){
    return(
        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Other Names</th>
        </tr>
    )
}
function Appbody(){
    return(
        <tbody>
            <AppNames myNames={["Solomon", "Ndifereke", "Aniefiok"]} />
            <AppNames myNames={["Adeola", "Olabisi", "Adekunle"]} />
            <AppNames myNames={["Inemesit", "Anietie", "Akpan"]} />
        </tbody>
    )
}
function App(){
    return(
        <table>
            <AppHead/>
            <Appbody />
        </table>
    )
}

var rootElement = document.getElementById("start");
ReactDOM.render(<App/>, rootElement);

