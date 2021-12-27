import "./contact.css";
import { useRef, useState, useContext } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context.js";
import toast  from 'react-simple-toasts';

export const Contact = (props) => {
    const formRef= useRef();
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_g9yilqc', 'template_ds1xedm', formRef.current, 'user_VG7Z7YgguH3m83nqJgjWK')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                document.getElementById("emailForm").reset();
                toast("Message sent! :D ", 4000);
            }, (error) => {
                console.log(error.text);
            });
        };
    
    return (
        <div className="c" id="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title"> {props.wannaReachMe} </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <i id="c-icon" class="fas fa-phone-alt size3x"></i>                            
                            +57 3008256664
                        </div>
                        <div className="c-info-item">
                            <i id="c-icon" class="fas fa-envelope"></i>
                            franpautt@gmail.com
                        </div>
                        <div className="c-info-item">
                            <i id="c-icon" class="fas fa-map-marker-alt"></i>
                            Barranquilla, Colombia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b> { props.projectInMind } </b> { props.alwaysAvailable }
                    </p>
                    <form id="emailForm" ref={formRef} onSubmit={ handleSubmit }>
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder={ props.placeholderName } name="user_name" required />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder={ props.placeholderSubject }  name="user_subject" required />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="email" placeholder={ props.placeholderEmail }  name="user_email" required />
                        <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder={ props.placeholderMessage }  name="message"  required />
                        <button className="c-button"> {props.labelSubmit} </button>
                        {done && props.thanks }
                    </form>
                </div>
            </div>
        </div>
    )
}
