import React, { HTMLInputTypeAttribute } from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute | 'textarea';
  placeholder?: string;
  maxLength?: number;
  autoFocus?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  maxLength,
  autoFocus = false,
  required = false,
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label htmlFor={label}>{label}</label>

      {type !== 'textarea' && (
        <input
          id={label}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          autoFocus={autoFocus}
          required={required}
        />
      )}
      {type === 'textarea' && (
        <textarea
          id={label}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          autoFocus={autoFocus}
          required={required}
        />
      )}
    </>
  );
};

export default Input;
