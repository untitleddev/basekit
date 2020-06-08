import React, { Dispatch, SetStateAction } from "react";
export interface ContextValue {
    state: Record<string, any>;
    setState: Dispatch<SetStateAction<{}>>;
}
export declare const GlobalStateContext: React.Context<ContextValue>;
declare const GlobalStateProvider: ({ children }: any) => JSX.Element;
export default GlobalStateProvider;
//# sourceMappingURL=globalState.d.ts.map