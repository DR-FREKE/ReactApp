function EditName(user) {
    return user.FirstName + " " + user.LastName;
}
let mUser = {
    FirstName: "Solomon",
    LastName: "Ndifereke"
}
var element = (<h1> Welcome Mr. { EditName(mUser) }</h1>);
let rootElement = document.getElementById("start");
ReactDOM.render(element, rootElement);



// an array can also be used instead of objects
 function NamesArray(user){
     return user[0];
 }
