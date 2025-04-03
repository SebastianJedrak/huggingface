import React from 'react';
import './Button.scss';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  onClick,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <button
      className="ui-button"
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default Button;
