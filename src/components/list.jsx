import React from "react";

import Item from "./item";
function List({list,checked}) {
    return (
        <div className="list">
            {
                list.length ? list.map((item,index)=> <Item key={index} data={item} checked={checked}/> ) :
                "Tasks empty"
            }
        </div>
    );
}

export default List;