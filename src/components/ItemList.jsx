import { useMemo, useState } from 'react';
import Select from 'react-select';
import EmptyView from './EmptyView';
import { useItemStore } from '../stores/itemStore';

const SORTING_OPTIONS = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export function ItemList() {
  const [sortBy, setSortBy] = useState(SORTING_OPTIONS[0].value);

  const items = useItemStore(state => state.items);
  const deleteItem = useItemStore(state => state.deleteItem);
  const toggleItem = useItemStore(state => state.toggleItem);

  const sortedItems = useMemo(() =>
    [...items].sort((a, b) => {
      if (sortBy === 'packed') return b.packed - a.packed;
      if (sortBy === 'unpacked') return a.packed - b.packed;

      return;
    }), [items, sortBy]
  );
  
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.length > 0 ?
        <section className="sorting">
          <Select
            defaultValue={SORTING_OPTIONS[0]}
            onChange={option => setSortBy(option.value)}
            options={SORTING_OPTIONS}
          />
        </section> :
        null
      }
      
      {sortedItems.map(item => {
        return (
          <Item 
            key={item.id}
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          checked={item.packed}
          type="checkbox"
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
