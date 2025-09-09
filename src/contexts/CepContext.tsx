import React, { createContext, useState } from "react";
import { CepResponse } from "../types";

interface CepContextType {
  cepData: CepResponse | null;
  setCepData: (data: CepResponse | null) => void;
}

export const CepContext = createContext<CepContextType>({
  cepData: null,
  setCepData: () => {},
});

export const CepProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cepData, setCepData] = useState<CepResponse | null>(null);

  return (
    <CepContext.Provider value={{ cepData, setCepData }}>
      {children}
    </CepContext.Provider>
  );
};
