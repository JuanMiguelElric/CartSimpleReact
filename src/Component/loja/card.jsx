import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartActions from './Acao/cart';


const Card = ({product,children})=>{
    const cart = useSelector(state=> state.cart.value)
    const dispatch= useDispatch();
    
    return(
        <div className="col-md-3">
            <div className="card" style={{marginBottom:'3rem'}} >
                <img src={product.image} style={{width:'300px'}} alt={product.name_product} className="card-img-top"  />
                <div className="card-body">
                    <h6 className="card-title">{children}</h6>
                    <p className="card-text">R${product.price.toFixed(2)}</p>
                    <button className="btn btn-primary" onClick={()=>dispatch(cartActions.Add(cart,product))}>
                        Adicionar
                    </button>
                </div>
            </div>
        </div>        
    )
}
export default Card;