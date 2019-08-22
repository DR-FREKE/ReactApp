import React, { Component } from 'react';

class Mapper extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var element = this.props.productArray.map((items, index)=>{
            return (<li key={index}>id: {index +1} || productName: {items.name} || productPrice: {items.price}</li>);
        });
        return(
            <ul>{element}</ul>
        )
    }
}

export default Mapper;