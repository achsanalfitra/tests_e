import './Button.module.style.css';

interface AppButtonProps {
  label?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  onClick?: () => void;
}

export function AppButton({
  label = 'Done',
  backgroundColor = '#ffce22',
  backgroundColorHover = '#ffd84d',
  onClick
}: AppButtonProps) {
  
  const style = {
    '--app-button-background-color': backgroundColor,
    '--app-button-background-color-hover': backgroundColorHover,
  } as React.CSSProperties;

  return (
    <button 
      className="app-button" 
      style={style} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}
