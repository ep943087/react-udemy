
const style = {
    cursor: "pointer",
    padding: "10px",
    border: "1px solid black",
    margin: "5px"
}


const charComponent = (props) => (
    <div>
        <div style={style} onClick={props.click}>{props.char}</div>
    </div>
);

export default charComponent;