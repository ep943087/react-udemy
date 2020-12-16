
const style = {
    border: "1px solid black",
    width: "80%",
    padding: "10px",
}

const UserInput = (props) => (
    <input style={style} value={props.username} type="text" onChange={props.updateUsername}/>
)

export default UserInput;