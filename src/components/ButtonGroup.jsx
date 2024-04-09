import { Button } from '../Button';
import { useItemStore } from '../stores/itemStore';

export function ButtonGroup() {  
  const markAllAsComplete = useItemStore(state => state.markAllAsComplete);
  const markAllAsIncomplete = useItemStore(state => state.markAllAsIncomplete);
  const resetToInitial = useItemStore(state => state.resetToInitial);
  const removeAllItems = useItemStore(state => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClickButton: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClickButton: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClickButton: resetToInitial,
    },
    {
      text: "Remove all items",
      onClickButton: removeAllItems,
    },
  ];
  
  return (
    <section className="button-group">
      {secondaryButtons.map(button => {
          return (
            <Button 
              key={`${button.text}-${button.onClickButton.toString()}`}
              buttonType="secondary"
              onClickButton={button.onClickButton}
            >
              {button.text}
            </Button>
          );
      })}
    </section>
  );
}
