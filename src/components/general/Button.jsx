import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './general.css';

function Button({
  label,
  className = '',
  onClick,
  icon,
}) {
  return (
    <button
      className={`general-button ${className}`}
      type="button"
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