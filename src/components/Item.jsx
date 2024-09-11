import React from 'react';

const Item = ({url}) => {
    return (
        <div className="grid-item"><img src={url} alt="" /></div>
    );
};

export default Item;
