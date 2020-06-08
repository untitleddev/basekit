import React from "react";
import { useTheme } from "styled-components";
import * as R from "ramda";

interface DeviceInfo {
  width: number;
  device: string;
}

export default function (): DeviceInfo {
  const [state, setState] = React.useState({
    width: window?.innerWidth ?? 0,
    device: "desktop",
  });
  const theme = useTheme();

  React.useEffect(() => {
    const updateState = () =>
      setState({
        width: window.innerWidth,
        device: R.pipe<any, any, any, string>(
          R.toPairs,
          R.find(([device, width]) => window.innerWidth <= width),
          R.head
        )(R.propOr({}, "breakpoints", theme)),
      });

    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, []);

  return state;
}
