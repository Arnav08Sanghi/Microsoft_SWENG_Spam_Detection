import PropTypes from "prop-types";

function Input(props) {
    return (
        <div className="input-container">
            <textarea
                type="text"
                className="spamText"
                name="spamText"
                placeholder={props.placeholder}
                value={props.userInput}
                onChange={(e) => props.setUserInput(e.target.value)}
            >
            </textarea>
        </div>
    );
}

Input.propTypes = {
    placeholder: PropTypes.string, // Ensures placeholder is a string
    userInput: PropTypes.string.isRequired,
    setUserInput: PropTypes.func.isRequired,
    keyValue: PropTypes.integer,
};

Input.defaultProps = {
    placeholder: "Enter text...", // Sets a default value if none is provided
};

export default Input;
