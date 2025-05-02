//import Leaf from './assets/leaf-svgrepo-com.svg'
import Leaf from './assets/leaf.svg'
import PropTypes from "prop-types";

function Info(props){

    return (
      <div className="sus_box">
          <div className="leaf__icon">
              <img src={Leaf}  alt="Leaf Icon" width="24" height="24"></img>
          </div>
          <div className="sus__title">By using our model, you emitted over 10 times less CO2!</div>

          <div className="sus__close" onClick={props.onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20">
              <path
                fill="#393a37"
                d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
              ></path>
            </svg>
          </div>

      </div>
  
    )
}

Info.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose is a function and is required
};

Info.defaultProps = {
  onClose: false, // onClose is a function and is required
};

  
export default Info;


