import React from 'react';

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
    <button type={type} onClick={onClick} disabled={disabled || isLoading}>
      {label}
    </button>
  );
};

export default Button;
