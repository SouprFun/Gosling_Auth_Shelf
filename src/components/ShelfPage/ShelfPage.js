import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();


    const items = useSelector(store => store.item);
    console.log('items is: ', items);

    return (
      <div className="container">
        <h2>Shelf</h2>
        <p>All of the available items can be seen here.</p>

        <button onClick={() =>
          dispatch({
            type: 'DELETE_ITEM',
            payload: { item: 8 }
          }
          )}>DELETE</button>

        {items.map(item =>
          <div
            key={item.id}> <h4>{item.description}</h4>
            <img src={item.image_url}></img>
            <button onClick={() =>
              dispatch({
                type: 'DELETE_ITEM',
                payload: { item: 8 }
              }
              )}>DELETE</button>
          </div>)}

      </div>
    );
  }

  export default ShelfPage;