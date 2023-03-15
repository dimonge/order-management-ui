import React from "react";
import PropTypes from "prop-types";
import { StatefulButtonGroup, MODE, SIZE } from "baseui/button-group";

function ButtonGroup({ mode, size, initialState, children, ...props }) {
  return (
    <StatefulButtonGroup
      size={size}
      mode={mode}
      initialState={initialState}
      {...props}>
      {children}
    </StatefulButtonGroup>
  );
}

ButtonGroup.defaultProps = {
  mode: MODE.radio,
  size: SIZE.compact,
  initialState: { selected: 0 }
};

ButtonGroup.propTypes = {
  mode: PropTypes.string,
  size: PropTypes.string,
  initialState: PropTypes.object,
  children: PropTypes.element.isRequired
};

export default ButtonGroup;
