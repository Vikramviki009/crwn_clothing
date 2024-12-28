import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((response) => {
      if (response) {
        createUserDocumentFromAuth(response);
      }
      setCurrentUser(response);
    });

    return unSubscribe;
  }, []);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
