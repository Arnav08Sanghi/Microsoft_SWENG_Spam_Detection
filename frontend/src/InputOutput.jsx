import { useState, useEffect } from "react";
import Input from "./Input.jsx";
import Delete from './delete.jsx';
import Stats from './Stats.jsx';
import SusBox from './Error-Box.jsx';

function InputOutput() {
  const [activeInput, setActiveInput] = useState("text");
  const [inputValue, setInputValue] = useState(""); // Store input value
  const [output, setOutput] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  // Define global key values needed for switch
  const TEXT_INPUT_KEY = 1;
  const LINK_INPUT_KEY = 2; 

  // Declare keyValue as a state variable
  const [keyValue, setKeyValue] = useState(TEXT_INPUT_KEY); // Default is TEXT_INPUT_KEY

  // Update keyValue whenever activeInput changes
  useEffect(() => {
    setKeyValue(activeInput === "text" ? TEXT_INPUT_KEY : LINK_INPUT_KEY);
  }, [activeInput]);

  const handleDelete = () => {
    setInputValue(""); // Clear input when delete is pressed
    console.log("Delete button clicked");  // Debugging
    setOutput("");  // Optional: Clear output
  };

  const handleSubmit = async () => {
    setShowInfo(true); // Show the pop-up when clicking the button
    const backendUrlText = "https://group11spamapi-bbbjfpdkhpd3g9ev.westeurope-01.azurewebsites.net/predict";
    const backendUrlTwitter = "https://group11spamapi-bbbjfpdkhpd3g9ev.westeurope-01.azurewebsites.net/predict2";

    // Declare backendUrl outside of the conditional block
    let backendUrl;

    // Set the backend URL based on keyValue_switch
    if (keyValue === TEXT_INPUT_KEY) {
      backendUrl = backendUrlText;
    } else {
      backendUrl = backendUrlTwitter;
    }

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputValue }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonResponse = await response.json();
      setOutput(jsonResponse);
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setOutput("Error: Unable to fetch result from the server");
    }
  };

  return (
    <div className="input-output"> {/* Add the class here */}

        <div className="input-container">
            
            <div className="switch-buttons">
                <button className={`text ${activeInput === "text" ? "pressed" : ""}`}  
                    onClick={() => setActiveInput("text")}>
                      Text
                </button>
                <button className={`twitter ${activeInput === "twitter" ? "pressed" : ""}`} 
                    onClick={() => setActiveInput("twitter")}>
                      Twitter
                </button>
            </div>

            {activeInput === "text" ? (
                <Input
                    placeholder="Type here to check for spam"
                    keyValue = {TEXT_INPUT_KEY}
                    userInput={inputValue}  
                    setUserInput={setInputValue} 
                    onChange={(e) => setInputValue(e.target.value)} // Update input value
                />
            ) : (
                <Input
                    placeholder="Enter Twitter Link to check for spam"
                    keyValue = {LINK_INPUT_KEY}
                    userInput={inputValue}  
                    setUserInput={setInputValue} 
                    onChange={(e) => setInputValue(e.target.value)} // Update input value
                />
            )}

            <Delete onDelete={handleDelete} />

            <div>
              <button className="enter-button" type="submit" onClick={handleSubmit}>Predict</button>

              {/* Show the Info component when showInfo is true */}
              {showInfo && <SusBox onClose={() => setShowInfo(false)} />}
            </div>

        </div>

  
        <div className="output-container">
            <Stats accuracy={83.4} precision={7} recall={55} f1={0.83} />
            <h2>
                {output === 1 ? "This message is spam!" : output === 0 ? "This message is not spam" : "Waiting for input..."}
            </h2>
        </div>
    </div>
);
}


export default InputOutput;
