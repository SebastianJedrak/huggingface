import React, { HTMLInputTypeAttribute } from 'react';

interface InputProps {
  label: string;
  type?: HTMLInputTypeAttribute | 'textarea';
  placeholder?: string;
  maxLength?: number;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder = '',
  maxLength,
  autoFocus = false,
}) => {
  return (
    <>
      <label>{label}</label>

      {type !== 'textarea' && (
        <input type={type} placeholder={placeholder} maxLength={maxLength} autoFocus={autoFocus} />
      )}
      {type === 'textarea' && (
        <textarea placeholder={placeholder} maxLength={maxLength} autoFocus={autoFocus} />
      )}
    </>
  );
};

export default Input;
