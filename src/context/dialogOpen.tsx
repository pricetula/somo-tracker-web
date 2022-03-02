import React from 'react';

export const DialogOpenContext = React.createContext({
  isOpen: false,
  setIsOpen: (v: boolean) => null
});

export const DialogOpenContextProvider = ({ children }: { children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <DialogOpenContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </DialogOpenContext.Provider>
  );
};