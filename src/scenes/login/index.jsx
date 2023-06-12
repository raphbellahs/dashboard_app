import React, { useState } from "react";
import { Box, Button, TextField, useTheme } from "@mui/material";
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const colors = theme.palette;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("LOGGING IN: ", username, password);
    // Redirect to main app
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: colors.background.default,
      }}
    >
      <Box sx={{ mb: "16px" }}>
        <VpnKeyIcon sx={{ fontSize: 40 }} />
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "24px",
          backgroundColor: colors.background.paper,
          borderRadius: "4px",
          boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.primary.main,
            color: colors.common.white,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: colors.primary.dark,
            },
          }}
          type="submit"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
