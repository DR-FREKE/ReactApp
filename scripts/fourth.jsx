// jsx helps prevent input injections

var title = response.potentiallyMaliciousInput;
var element = (
    <h1>Hello {title}</h1>
    );

var rootElement = document.getElementById("start");
ReactDOM.render(element, rootElement);