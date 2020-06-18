import React from "react";
import * as R from "ramda";

interface DeviceInfo {
  width: number;
  device: string;
}

const findDevice = (deviceWidth: number) =>
  R.pipe<any, any, string>(
    R.find(([device, width]) => deviceWidth < width),
    R.head
  )([
    ["mobile", 768],
    ["tablet", 1024],
    ["desktop", 1440],
    ["hd", Infinity],
  ]);

export default function (): DeviceInfo {
  const [state, setState] = React.useState({
    width: 0,
    device: "desktop",
  });

  React.useEffect(() => {
    const updateState = () =>
      setState({
        width: window.innerWidth,
        device: findDevice(window.innerWidth),
      });

    updateState();

    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, []);

  return state;
}
