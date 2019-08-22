import React, { Component } from 'react';

class ListComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = { data : [] };
    }
    componentDidMount(){
        setInterval(()=>{
            $.ajax({
                url: "https://api.unsplash.com/photos/?per_page=50&order_by=latest",
                type: "GET",
                headers: {
                    Authorization: "Client-ID f566dd0f470ce3711278986b0ba8cd44448e47169fb2ba8bf47211b1230ee71b"
                },
                success: (res) => {
                    this.setState({
                        data : res
                    })
                    // for (var i = 0; i < res.length; i++) {
                    //     console.log(res[i].urls.small);
                    //     var result = res[i].urls.small;
                    //     document.getElementById("div_body").innerHTML += "<img src='" + result + "'/>"
                    // }
                }
            })
        }, 1000);
        // var newArray = ["Billy", "Mark", "John Doe"];
    }

    render(){
        
        // var element = this.state.data.map((result, i)=>{
        //     return (<AppContent data={result}/>);
        // })
        // return (<div>{element}</div>)
        var style={
            grid:{
                'display':'grid',
                'grid-template-columns':'repeat(4, 1fr)',
                'grid-template-rows':'repeat(4, 1fr)',
                'grid-gap':'.5em',
                'grid-auto-rows':'minmax(100px, auto)',
                'background':'#fff'
            },
            'grid>div':{
                'background':'red'
            }
        }
        return(
            <div>
                <Header title="WELCOME TO SOLOMON'S REACT ALBUM PAGE"/>
                <div style={style.grid}>
                    {this.state.data.map((result, i)=><AppContent data={result.urls.full} box={style.box}/>)}
                </div>
            </div>
        )
    }
}

class AppContent extends React.Component{

    render(){
        return(
            <div className="" style={this.props.box}>
                <img src={this.props.data} alt="" height='100%' width='100%'/>
            </div>
        );
    }
}

class Header extends React.Component{

    render(){
        return(
            <div className><h2>{this.props.title}</h2></div>
        )
    }
}

export default ListComponent;