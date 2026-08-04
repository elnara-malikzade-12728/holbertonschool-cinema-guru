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
      <div className="input-header">
        {icon && (
          <FontAwesomeIcon
            className="input-icon"
            icon={icon}
          />
        )}

        <label>{label}</label>
      </div>

      <input
        {...inputAttributes}
        type={type}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
}

export default Input;