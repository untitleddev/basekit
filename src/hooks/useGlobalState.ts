import React from "react";

import { GlobalStateContext, ContextValue } from "../providers/globalState";

export default function useGlobalState(): ContextValue {
  return React.useContext(GlobalStateContext);
}
