import { AddItemForm } from './AddItemForm';
import { ButtonGroup } from './ButtonGroup';

export function Sidebar() {
  return (
    <div className="sidebar">
      <AddItemForm />

      <ButtonGroup />
    </div>
  );
}
