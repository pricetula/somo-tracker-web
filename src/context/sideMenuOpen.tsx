import React from 'react';

export const SideMenuOpenContext = React.createContext({
  isOpen: false,
  setIsOpen: (v: boolean) => null
});

export const SideMenuOpenContextProvider = ({ children }: { children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <SideMenuOpenContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </SideMenuOpenContext.Provider>
  );
};