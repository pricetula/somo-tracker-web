import React from 'react';

export const DialogOpenContext = React.createContext({
  isOpen: false,
  setIsOpen: (v: boolean) => null,
  isSideMenuOpen: false,
  setIsSideMenuOpen: (v: boolean) => null,
});

export const DialogOpenContextProvider = ({ children }: { children: React.ReactNode}) => {
  const [isOpen, setIsOpenHandler] = React.useState(false);
  const [isSideMenuOpen, setIsSideMenuOpenHandler] = React.useState(false);
  const setIsOpen = (v: boolean) => {
    setIsSideMenuOpenHandler(false);
    setIsOpenHandler(v);
  }
  const setIsSideMenuOpen = (v: boolean) => {
    setIsOpenHandler(false);
    setIsSideMenuOpenHandler(v);
  }
  return (
    <DialogOpenContext.Provider value={{isOpen, setIsOpen, isSideMenuOpen, setIsSideMenuOpen}}>
      {children}
    </DialogOpenContext.Provider>
  );
};