import React,{Component} from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

export default class Assignment2 extends Component{
    state = {
        text: "",
    }
    onChangeInput = (event) => {
        const text = event.target.value;
        this.setState({text});
    }
    onClick = (index) => {
        const oldText = this.state.text.split('');
        oldText.splice(index,1);
        const temp = oldText.join(''); 
        this.setState({text: temp})
    }
    render(){
        const style = {textAlign: "center"};
        const componentsStyle = {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
        }
        return(
            <div style={style}>
                <h1>Assignment 2</h1>
                <textarea onChange={this.onChangeInput} type="text" value={this.state.text}></textarea>
                <ValidationComponent text={this.state.text}/>
                <div style={componentsStyle}>
                {
                    this.state.text.split('').map((ch,index)=>{
                        return <CharComponent char={ch} click={this.onClick.bind(this,index)} />
                    })
                }     
                </div>
           
            </div>
        )
    }
}