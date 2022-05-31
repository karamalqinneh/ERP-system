import { useState } from "react";

import styled from "styled-components";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import Button from "../../../UI/button";

const StyledCard = styled(Card)`
  background-color: #fefefe;
`;
const StyledCardHeader = styled(CardHeader)`
  background-color: #fefefe;
  & span {
    background-color: #fefefe;
  }
`;
const StyledCardContent = styled(CardContent)`
  background-color: #fefefe;
`;
const StyledBox = styled(Box)`
  background-color: #fefefe;
`;
const StyledTextField = styled(TextField)`
  background-color: #fefefe;
`;
const StyledButton = styled(Button)`
  width: 15vw;
`;

const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form {...props}>
        <StyledCard>
          <StyledCardHeader subheader="Update password" title="Password" />
          <Divider />
          <StyledCardContent>
            <StyledTextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
            <StyledTextField
              fullWidth
              label="Confirm password"
              margin="normal"
              name="confirm"
              onChange={handleChange}
              type="password"
              value={values.confirm}
              variant="outlined"
            />
          </StyledCardContent>
          <Divider />
          <StyledBox
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <StyledButton>Update</StyledButton>
          </StyledBox>
        </StyledCard>
      </form>
    </div>
  );
};

export default SettingsPassword;
