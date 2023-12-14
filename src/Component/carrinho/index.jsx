import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "../loja/Acao/cart"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faWindowClose, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const Cart = () =>{
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    
    let totalPrice =0;
    for(let i = 0; i<cart.Cart.length;i++){
        totalPrice += cart.Cart[i].price * cart.Cart[i].quantity;
    }
    if(cart.value > 0){
        localStorage.setItem('loja:cart',JSON.stringify(cart))
    }
    return(
        <>
            <button type="button" className="btn-dark" data-bs-toggle="modal" data-bs-target="#CartModal" >
                <span><FontAwesomeIcon icon={faCartShopping} /></span>
                <span className="badge rounded-pill text-bg-warning">
                    {cart.value}
                </span>
            </button>

            <div className=" modal " id="CartModal" tabIndex="-1" >
                <div className="modal-dialog " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-success"id="CartModalLabel">Meu Carrinho</h5>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container modal-body table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Produto</th>
                                <th scope="col">Qtd</th>
                                <th scope="col">Preço</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.Cart.map( item =>{
                                return(
                                    <tr key={item.id}>
                                        <th><button onClick={()=>dispatch(cartActions.DeleteItem(cart,item))} className="badge bg-danger"><FontAwesomeIcon icon={faWindowClose} /></button></th>
                                        <th><img className="img-fluid img-thumbnail"  src={item.image}  alt={item.Name} style={{width:'2em'}} /></th>
                                        <th><span className="badge badge-pill bg-warning">
                                                {item.quantity}
                                            </span>
                                        </th>
                                        <th>R$ {item.price.toFixed(2)}</th>
                                        <th><button onClick={() => dispatch(cartActions.AddItem(cart, item))} className="badge badge-pill bg-primary"><FontAwesomeIcon icon={faPlus} /></button></th>
                                        <th><button onClick={() => dispatch(cartActions.RemoveItem(cart, item))} className="badge badge-pill bg-danger"><FontAwesomeIcon icon={faMinus} /></button></th>
                                        <th>R$ {(item.price*item.quantity).toFixed(2)}</th>
                                    </tr>
                                )
                            })}
                            <tr>
                                <th colSpan="2" scope="col">Total</th>
                                <th colSpan="3">{cart.value}itens</th>
                                <th colSpan="2">R$ {totalPrice.toFixed(2)}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary"data-bs-dismiss="modal">Close</button>
                </div>

            </div>
        </>
    )
}
export default Cart;