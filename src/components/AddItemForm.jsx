import { useRef, useState } from 'react';
import { Button } from '../Button';
import { useItemStore } from '../stores/itemStore';

export function AddItemForm() {
  
  const addItem = useItemStore(state => state.addItem);
  const [itemText, setItemText] = useState('');
  const inputRef = useRef();
  
  const handleChange = (e) => {
    setItemText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic item validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    addItem(itemText);

    setItemText('');
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        autoFocus
        onChange={handleChange}
        ref={inputRef}
        value={itemText} 
      />
      <Button>Add item to list</Button>
    </form>
  );
}
