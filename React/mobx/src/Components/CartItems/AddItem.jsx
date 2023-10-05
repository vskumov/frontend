import React, { useState } from 'react';
import CartStore from '../../state/cartStore';
import { observer } from 'mobx-react-lite';

const AddItem = observer(() => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    CartStore.addItem({ id: Date.now(), title, price });
    setTitle('');
    setPrice(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button>add</button>
      </form>
    </div>
  );
});

export default AddItem;
