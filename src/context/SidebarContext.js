import React from "react";

export const SidebarContext = React.createContext();

const SideProvider = ({ children }) => {
  const [showNewInvitation, setShowNewInvitation] = React.useState(false);
  const [showMyInvitation, setShowMyInvitation] = React.useState(true);
  const [showMyProfile, setShowMyProfile] = React.useState(false);
  const [createInvitation, setCreateInvitation] = React.useState(false);

  const hendleNewInvitation = () => {
    setShowNewInvitation(true);
    setShowMyInvitation(false);
    setShowMyProfile(false);
    setCreateInvitation(false);
  };
  const hendleMyInvitation = () => {
    setShowNewInvitation(false);
    setShowMyInvitation(true);
    setShowMyProfile(false);
    setCreateInvitation(false);
  };
  const hendleMyProfile = () => {
    setShowNewInvitation(false);
    setShowMyInvitation(false);
    setShowMyProfile(true);
    setCreateInvitation(false);
  };
  const hendleCreateInvitation = () => {
    setShowNewInvitation(false);
    setShowMyInvitation(false);
    setShowMyProfile(false);
    setCreateInvitation(true);
  };

  return (
    <SidebarContext.Provider
      value={{
        hendleNewInvitation,
        hendleMyInvitation,
        hendleMyProfile,
        hendleCreateInvitation,
        showNewInvitation,
        showMyInvitation,
        showMyProfile,
        createInvitation,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SideProvider;
