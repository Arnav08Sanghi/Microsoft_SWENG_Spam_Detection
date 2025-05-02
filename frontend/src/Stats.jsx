
import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import info from './assets/info_button.png';

function Stats(props) {
  const [stats, setStats] = useState(false);

  // Toggle the stats visibility on click
  const handleClick = () => {
    setStats((prevStats) => !prevStats);  // Toggle the state between true and false
  };

  const getColor = (value) => {
    if (value <= 30) return "red";
    if (value <= 70) return "orange";
    return "green";
  };


  return (
    <div>
      {/* {stats && ( */}
        <div className={`stats-popup ${stats ? "expand" : "collapse"}`}>
          {/* Accuracy, Precision, Recall will have the same value */}

        <div className="stat-item">
            <p>Accuracy: <span style={{ color: getColor(props.accuracy) }}>{props.accuracy}%</span></p>
            <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${props.accuracy}%`, backgroundColor: getColor(props.accuracy) }}></div>
            </div>
        </div>
        
        <div className="stat-item">
            <p>Precision: <span style={{ color: getColor(props.precision) }}>{props.precision}%</span></p>
            <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${props.precision}%`, backgroundColor: getColor(props.precision) }}></div>
            </div>
        </div>

        <div className="stat-item">
            <p>Recall: <span style={{ color: getColor(props.recall) }}>{props.recall}%</span></p>
            <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${props.recall}%`, backgroundColor: getColor(props.recall) }}></div>
            </div>
        </div>

        <div className="stat-item">
            <p>F1 Score: <span style={{ color: getColor(props.f1 * 100) }}>{props.f1}</span></p>
            <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${props.f1 * 100}%`, backgroundColor: getColor(props.f1 * 100) }}></div>
            </div>
        </div>
        
    </div>
    {/* )} */}

      <img
        src={info}
        alt="Info"
        className="info-button"
        onClick={handleClick}  // Handle click to toggle stats visibility
      />
    </div>
  );
}


Stats.propTypes = {
    accuracy: PropTypes.number.isRequired,
    precision: PropTypes.number.isRequired,
    recall: PropTypes.number.isRequired,
    f1: PropTypes.number.isRequired,
  };
  
  // **Default Props**
Stats.defaultProps = {
    accuracy: 50,
    precision: 50,
    recall: 50,
    f1: 60, // F1 gets a different default
};
  

export default Stats;
