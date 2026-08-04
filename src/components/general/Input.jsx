import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './general.css';

function Input({
  label,
  type,
  className = '',
  value,
  setValue,
  icon,
  inputAttributes = {},
}) {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}</label>}

      <div className="input-wrapper">
        {icon && (
          <FontAwesomeIcon
            className="input-icon"
            icon={icon}
          />
        )}

        <input
          {...inputAttributes}
          className={icon ? 'input-with-icon' : ''}
          type={type}
          value={value}
          onChange={handleInput}
        />
      </div>
    </div>
  );
}

export default Input;
