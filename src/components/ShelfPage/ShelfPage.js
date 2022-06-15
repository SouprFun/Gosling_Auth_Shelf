import React from 'react';
import { useSelector } from 'react-redux';

function ShelfPage() {
  const items = useSelector(store => store.item);
  console.log('items is: ', items);
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {items.map(item => <div key={item.id}> <h4>{item.description}</h4> <img src={item.image_url}></img></div>)}
    </div>
  );
}

export default ShelfPage;