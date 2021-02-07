import React from "react";

function Item({data, checked}) {
    return (
        <div className="list__item">
            <input type="checkbox" className="item__checkbox" defaultChecked={false} onChange={()=>checked(data.task)} />
            <p className="item__title">{data.task}</p>
        </div>
    );
}

export default Item;