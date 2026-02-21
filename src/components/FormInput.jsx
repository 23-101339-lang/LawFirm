import React from 'react'
import './FormInput.css'

export default function FormInput({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
  multiline = false,
  rows = 4,
  className = '',
  ...props
}) {
  const id = `form-${name}`

  if (multiline) {
    return (
      <div className={`form-input ${className}`.trim()}>
        {label && (
          <label htmlFor={id} className="form-input__label">
            {label}
            {required && <span className="form-input__required">*</span>}
          </label>
        )}
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`form-input__field form-input__field--textarea ${error ? 'form-input__field--error' : ''}`}
          {...props}
        />
        {error && <span className="form-input__error">{error}</span>}
      </div>
    )
  }

  return (
    <div className={`form-input ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className="form-input__label">
          {label}
          {required && <span className="form-input__required">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`form-input__field ${error ? 'form-input__field--error' : ''}`}
        {...props}
      />
      {error && <span className="form-input__error">{error}</span>}
    </div>
  )
}
