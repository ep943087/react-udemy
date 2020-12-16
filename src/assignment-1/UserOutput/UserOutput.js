const style = {
    border: "1px solid black",
    width: "40%",
    padding: "5px"
}

const UserOutput = (props) => (
    <div style={style}>
        <p>Username is <strong>{props.username}</strong></p>
        <p>No, burritos are awesome!</p>
    </div>
)

export default UserOutput;