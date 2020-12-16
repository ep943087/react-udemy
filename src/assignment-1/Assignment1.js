import React,{Component} from 'react';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

export default class Assignment1 extends Component{
    state = {
        username: "eliasproctor"
    }
    updateUsername = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    render(){
        const boxStyle = {
            display: "flex",
            width: "100vw",
            justifyContent: "center",
        }
        return(
            <div>
                <div style={boxStyle}>
                    <UserOutput username={this.state.username}/>
                    <UserOutput username={this.state.username}/>
                    </div>
                <div style={boxStyle}>
                    <UserInput username={this.state.username} updateUsername={this.updateUsername}/>
                </div>

           </div>
        )
    }
}