import React, { useState } from "react";
import moment from "moment";
import { TimePicker as BWTimePicker } from "baseui/timepicker";

function TimePicker({ value, clear, onChange, ...props }) {
  const [newValue, setNewValue] = useState("");

  React.useEffect(() => {
    if (clear) {
      setNewValue("");
    }
  }, [clear]);

  const handleChange = value => {
    setNewValue(value);
    if (!!value) {
      onChange(moment(value).format("HH:mm"));
    } else {
      onChange(null);
    }
  };

  return (
    <BWTimePicker
      value={newValue}
      nullable
      onChange={handleChange}
      {...props}
    />
  );
}

export default TimePicker;
