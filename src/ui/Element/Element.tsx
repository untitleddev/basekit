import React from "react";
import * as R from "ramda";
import Box from "ui-box";
import { useTheme } from "styled-components";

import { ElementProps } from "./types";
import {
  parseValues,
  pickAllowedAttrs,
  pickDataAttrs,
  resolveAlias,
} from "./utils";

const Element = React.forwardRef(
  ({ children, ...props }: ElementProps, ref) => {
    const theme = useTheme();
    const resolvedProps = React.useMemo(
      () => R.pipe<any, any, any>(resolveAlias, parseValues(theme))(props),
      [props]
    );
    const allowedAttrs = React.useMemo(() => pickAllowedAttrs(resolvedProps), [
      resolvedProps,
    ]);

    return (
      <Box innerRef={ref} {...allowedAttrs} {...pickDataAttrs(props)}>
        {children}
      </Box>
    );
  }
);

Element.displayName = "Element";

Element.defaultProps = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

export default Element;
