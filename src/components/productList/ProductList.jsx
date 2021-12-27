import "./productList.css";
import { Product } from "../product/Product";
import { products } from "../../data";

export const ProductList = (props) => {
    return (
        <div className="pl" id="projects">
            <div className="pl-texts">
                <h1 className="pl-title"> { props.mymainprojectsTitle } </h1>
                <p className="pl-desc">
                    { props.mymainprojectstext }
                </p>
            </div>
            <div className="pl-list">
                {products.map(item => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}
