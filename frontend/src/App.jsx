import React from "react";
import axios from "axios";
import { Button, Container, Typography, Box } from "@mui/material";

const App = () => {
  const handleClick = (buttonNumber) => {
    axios
      .post("http://192.168.43.73:5000/click", { buttonNumber })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10} textAlign="center">
        <Typography variant="h5" gutterBottom>
          Remote Control
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={() => handleClick("18")}
          fullWidth
          sx={{ mb: 2 }}
        >
          Say Hi
        </Button>
        <Button
          variant="contained"
          color="info"
          size="large"
          onClick={() => handleClick("Raise right hand")}
          fullWidth
          sx={{ mb: 2 }}
        >
          Raise Right Hand
        </Button>
        <Button
          variant="contained"
          color="info"
          size="large"
          onClick={() => handleClick("Raise left hand")}
          fullWidth
        >
          Raise Left Hand
        </Button>
      </Box>
    </Container>
  );
};

export default App;
