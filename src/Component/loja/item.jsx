import React from "react";

const Item = ({name,details}) =>{
    return(
        <div className="list-group-item">
            <h4 className="item-name">{name}</h4>
            <p className="item-details">{details}</p>
        </div>
    )
}
export default Item;