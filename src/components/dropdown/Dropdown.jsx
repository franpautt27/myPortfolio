import i18next from "i18next";
import "./dropdown.css";
import cookies from "js-cookie";

const languages = [
    
    {
      code: 'en',
      name: 'English',
      country_code: 'gb'
    },
    {
      code: 'es',
      name: 'Español',
      country_code: 'es'
    }
  ]

const desplegarLista = (e) => {
    e.preventDefault();        
    let list = document.querySelector(".list"); 
    list.classList.toggle("newList");
    
}
const ocultarLista = () => {  
  let newList = document.querySelector(".newList"); 
  newList.classList.toggle("newList");
}


export const Dropdown = (props) => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);
    return (
        <>
            <div className="dropdown">
                <button className="click" onClick={ desplegarLista }> <i id="iconoPlaneta" class="fas fa-globe-americas"></i>  <span id="textoBoton"> { props.langWord }  </span> </button>
                <div className="list">
                  { languages.map( ({code, name, country_code}) =>(
                    <button key={country_code} className="links" onClick={ ()=> {
                      i18next.changeLanguage(code);
                      ocultarLista();
                      } }
                      disabled={code === currentLanguageCode} >
                      <span className={`flag-icon flag-icon-${country_code} mx-2`} style={{ marginRight:"10px" }}></span>
                      {name}
                    </button>

                  ) ) }
                </div>
                
            </div>
        </>
    )
}
