
const validationComponent = (props) => (
    <div>
        {
            props.text.length >= 5?
            <p>Long Enough</p> :
            <p>Too Short</p>
        }
    </div>
);

export default validationComponent;