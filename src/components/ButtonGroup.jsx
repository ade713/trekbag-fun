import { Button } from '../Button';
import { MARK_ALL_AS_COMPLETE, MARK_ALL_AS_INCOMPLETE, REMOVE_ALL_ITEMS, RESET_TO_INITIAL } from '../lib/constants';
import { useItemStore } from '../stores/itemStore';

export function ButtonGroup() {  
  const markAllAsComplete = useItemStore(state => state.markAllAsComplete);
  const markAllAsIncomplete = useItemStore(state => state.markAllAsIncomplete);
  const resetToInitial = useItemStore(state => state.resetToInitial);
  const removeAllItems = useItemStore(state => state.removeAllItems);

  const secondaryButtons = [
    {
      text: MARK_ALL_AS_COMPLETE,
      onClickButton: markAllAsComplete,
    },
    {
      text: MARK_ALL_AS_INCOMPLETE,
      onClickButton: markAllAsIncomplete,
    },
    {
      text: RESET_TO_INITIAL,
      onClickButton: resetToInitial,
    },
    {
      text: REMOVE_ALL_ITEMS,
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
