import { idleTimeoutMillis } from 'pg/lib/defaults';
import React from 'react';
import {useDispatch} from 'react-redux';

function ShelfPage() {

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <button onClick={() => 
        dispatch({
            type:'DELETE_ITEM', 
            payload:{item:8}}
            )}>DELETE</button>
    </div>
  );
}

export default ShelfPage;
