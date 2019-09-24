import React from 'react';

const styles = {
    item: {
        cursor: 'pointer'     
    },
    complete: {
        color: 'grey',
        textDecoration: 'line-through',
    }
}

const Item = ({ id, name, price, complete, itemClick }) => (
    <li style={complete ? {...styles.item, ...styles.complete } : styles.item } 
    onClick={ () => itemClick(id) }>
      {name} • ${price}  
    </li>
)

export default Item;

