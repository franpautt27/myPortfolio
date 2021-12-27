import { useContext } from "react";
import "./toggle.css";
import { ThemeContext } from "../../context";




export const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }


    
    return (
        
            <div className="t">
                <i class="fas fa-sun" id="t-icon"></i>
                <i class="fas fa-moon" id="t-icon"></i>
                <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
                
            </div>
            
            
        
    )

    
}


