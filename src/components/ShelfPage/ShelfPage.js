import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react'

function ShelfPage() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch({ type: 'GET_ITEMS' });
  },[])
  

    const items = useSelector(store => store.item);

    console.log('items is: ', items);

    return (
      <div className="container">
        <h2>Shelf</h2>
        <p>All of the available items can be seen here.</p>
        {items.map(item =>
          <div
            key={item.id}> <h4>{item.description}</h4>
            <img src={item.image_url}></img>
            <button onClick={() =>
              dispatch({
                type: 'DELETE_ITEM',
                payload: { item: item.id }
              }
              )}>DELETE</button>
          </div>)}

      </div>
    );
  }

  export default ShelfPage;