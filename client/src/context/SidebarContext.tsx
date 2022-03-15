import React, { useMemo, useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

// @ts-ignore
export const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }: Props): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (): void => {
    setIsSidebarOpen(false);
  };

  const value = useMemo(
    () => ({ isSidebarOpen, toggleSidebar, closeSidebar }),
    [isSidebarOpen],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
