import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = React.useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = React.useState(false);
  const [authError, setAuthError] = React.useState(null);
  const [authChecked, setAuthChecked] = React.useState(true);
  const [appPublicSettings, setAppPublicSettings] = React.useState(null);

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const navigateToLogin = () => {
    // Placeholder for login navigation
  };

  const checkUserAuth = async () => {
    // Placeholder for auth check
  };

  const checkAppState = async () => {
    // Placeholder for app state check
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      authChecked,
      logout,
      navigateToLogin,
      checkUserAuth,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
