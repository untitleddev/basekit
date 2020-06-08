import React, { Dispatch, SetStateAction } from "react";

export interface ContextValue {
  state: Record<string, any>;
  setState: Dispatch<SetStateAction<{}>>;
}

export const GlobalStateContext = React.createContext({
  state: {},
  setState: () => {},
} as ContextValue);

const GlobalStateProvider = ({ children }: any) => {
  const [state, setState] = React.useState({});

  return (
    <GlobalStateContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
