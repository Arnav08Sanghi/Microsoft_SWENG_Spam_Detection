import { useState } from 'react';
import Sun from './assets/sun.png'
import Moon from './assets/moon.png'

function DarkMode() {

    const [style, setStyle] = useState(false); // Initialize state

    const toggleTheme = () => {
        setStyle(!style); // Update state
        if (style) {
          document.body.classList.remove('dark-mode'); // Remove dark-mode from body when toggled off
      } else {
          document.body.classList.add('dark-mode'); // Add dark-mode to body when toggled on
      }
      };

    return (
      <div>
        <label className="switch">
            {/* Sun Image for Light Mode */}
            <span className="sun">
                <img src={Sun} alt="Light Mode" width="24" height="24" />
            </span>

            {/* Moon Image for Dark Mode */}
            <span className="moon">
                <img src={Moon} alt="Dark Mode" width="24" height="24" />
            </span>

            {/* The actual checkbox */}
            <input 
                type="checkbox" 
                className="input" 
                checked={style} // Checkbox is checked if dark mode is on
                onChange={toggleTheme} // Toggle theme when clicked
            />
            
            {/* The slider that will move */}
            <span className="slider"></span>
        </label>
      </div>
    )
  }
  
  export default DarkMode;