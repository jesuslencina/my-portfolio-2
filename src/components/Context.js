import React, { useState, createContext } from 'react';

export const Context = createContext();

export function DataProvider(props) {
  ///STATE
  const [lang, setLang] = useState(1);

  ///RETURN
  return (
    <Context.Provider
      value={{
        lang,
        setLang,
      }}>
      {props.children}
    </Context.Provider>
  );
}
