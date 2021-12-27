import "./product.css";
import project1 from "../../img/project1.png";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.png";

export const Product = (props) => {
    const enCualEsta = (key) => {
        switch (key) {
            case "Imagen1":
                return project1;
                break;
            case "Imagen2":
                return project2;
                break;
            case "Imagen3":
                return project3;
                break;
            default:
                return project1;
        }
    }
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src= { enCualEsta(props.img)}  alt="" className="p-img" />
            </a>
        </div>
    )
}
