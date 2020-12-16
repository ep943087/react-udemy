import "./Person.css";

const person = (props) => (
    <div className="Person">
        <p onClick={props.click}>Hello, my name is {props.name} and I'm {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changeName}/>
    </div>
);

export default person;