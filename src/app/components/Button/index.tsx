type ButtonProps = {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button = ({ text, onClick, disabled, className }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className || ""}>
      {text}
    </button>
  );
};

export default Button;
