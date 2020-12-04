import { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

import "./styles.css";

const Checkbox = ({
  label,
  color,
  size = 18,
  defaultChecked = false,
  onChange = () => {},
  ...props
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  function handleChange() {
    onChange(!checked);
    setChecked(!checked);
  }

  const allProps = {
    ...props,
    style: {
      color,
      width: `${size}`,
      height: `${size}`,
    },
  };

  return (
    <div className="lan-checkbox" onClick={handleChange}>
      {checked ? (
        <MdCheckBox {...allProps} />
      ) : (
        <MdCheckBoxOutlineBlank {...allProps} />
      )}
      {label}
    </div>
  );
};

export default Checkbox;
