import { useItemStore } from '../stores/itemStore';
import { Counter } from './Counter';
import { Logo } from './Logo';

export function Header() {
  const items = useItemStore(state => state.items);
  
  return (
    <header>
      <Logo />
      <Counter
        totalNumberChecked={items.filter(item => item.packed).length}
        totalNumber={items.length}
      />
    </header>
  );
}
