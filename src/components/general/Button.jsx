import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './general.css';

function Button({
  label,
  className = '',
  onClick,
  icon,
  type = 'button',
}) {
  return (
    <button
      className={`general-button ${className}`}
      type={type}
      onClick={onClick}
    >
      {icon && (
        <FontAwesomeIcon
          className="button-icon"
          icon={icon}
        />
      )}

      <span>{label}</span>
    </button>
  );
}

export default Button;
