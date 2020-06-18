import React from "react";
import * as R from "ramda";

interface DeviceInfo {
  width: number;
  device: string;
}

export default function (): DeviceInfo {
  const [state, setState] = React.useState({
    width: 0,
    device: "desktop",
  });

  React.useEffect(() => {
    const updateState = () =>
      setState({
        width: window.innerWidth,
        device: R.pipe<any, any, string>(
          R.find(([device, width]) => window.innerWidth <= width),
          R.head
        )([
          ["mobile", 480],
          ["tablet", 768],
          ["desktop", 1024],
          ["hd", Infinity],
        ]),
      });

    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, []);

  return state;
}
