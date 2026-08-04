import './general.css';

function SelectInput({
  label,
  options = [],
  className = '',
  value,
  setValue,
}) {
  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`select-input-container ${className}`}>
      {label && <label>{label}</label>}

      <select
        value={value}
        onChange={handleSelect}
      >
        {options.map((option) => {
          const optionValue =
            typeof option === 'object'
              ? option.value
              : option;

          const optionLabel =
            typeof option === 'object'
              ? option.label
              : option;

          return (
            <option
              key={optionValue}
              value={optionValue}
            >
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectInput;