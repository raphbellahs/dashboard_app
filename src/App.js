import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from "./scenes/login";

function DashboardRoutes({ isSidebar, setIsSidebar, onLogout }) {
  return (
    <>
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} onLogout={onLogout} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loggedIn ? (
          <div className="app">
            <DashboardRoutes
              isSidebar={isSidebar}
              setIsSidebar={setIsSidebar}
              onLogout={handleLogout}
            />
          </div>
        ) : (
          <div className="login-page">
            <Routes>
              {/* <Route path="/" element={<Navigate to="/login" />} /> */}
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
          </div>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
