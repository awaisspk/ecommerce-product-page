import React from 'react';

type TheaderContext = {
  isMenuHidden: boolean;
  setIsMenuHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderContext = React.createContext({} as TheaderContext);
