export function Button({ children, buttonType, onClickButton }) {
  return (
    <button 
      className={`
        btn 
        ${buttonType === 'secondary' ? "btn--secondary" : ''}
      `}
      onClick={onClickButton}
    >
      { children }
    </button>
  );
}
