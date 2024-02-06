import UserContextProvider from "./userContext";

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default ContextProviders;
