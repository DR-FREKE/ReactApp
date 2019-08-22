var obj = {
    name: "Solomon",
    Age: 29
}
var element = (
    <h1>Hello {obj.name}, you are {obj.Age}</h1>
);
var rootElement = document.getElementById("start");
ReactDOM.render(element, rootElement);