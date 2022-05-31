import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import styled from "styled-components";

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
const StyledGrid = styled(Grid)`
  background-color: #fefefe;
`;
const StyledTypography = styled(Typography)`
  background-color: #fefefe;
`;

const StyledBox = styled(Box)`
  background-color: #fefefe;
`;

const StyledButton = styled(Button)`
  width: 15vw;
`;
const CheckBox = styled.div`
  margin-top: 1rem;
  overflow: none;
  width: auto;
  background-color: #fefefe;
`;
const SettingsNotifications = (props) => (
  <div style={{ marginBottom: "3vh" }}>
    <form {...props}>
      <StyledCard>
        <StyledCardHeader
          subheader="Manage the notifications"
          title="Notifications"
        />
        <Divider />
        <StyledCardContent>
          <StyledGrid
            item
            md={4}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
          >
            <StyledTypography color="textPrimary" gutterBottom variant="h6">
              Notifications
            </StyledTypography>
            <CheckBox>
              <input
                type="checkbox"
                style={{
                  backgroundColor: "#fefefe",
                  width: "1.2rem",
                  height: "1.2rem",
                }}
              />
              <label
                style={{ marginLeft: "0.5rem", backgroundColor: "#fefefe" }}
              >
                Email
              </label>
            </CheckBox>
            <CheckBox>
              <input
                type="checkbox"
                style={{
                  backgroundColor: "#fefefe",
                  width: "1.2rem",
                  height: "1.2rem",
                }}
              />
              <label
                style={{ marginLeft: "0.5rem", backgroundColor: "#fefefe" }}
              >
                Push Notifications
              </label>
            </CheckBox>
            <CheckBox>
              <input
                type="checkbox"
                style={{
                  backgroundColor: "#fefefe",
                  width: "1.2rem",
                  height: "1.2rem",
                }}
              />
              <label
                style={{ marginLeft: "0.5rem", backgroundColor: "#fefefe" }}
              >
                Text Messages
              </label>
            </CheckBox>
            <CheckBox>
              <input
                type="checkbox"
                style={{
                  backgroundColor: "#fefefe",
                  width: "1.2rem",
                  height: "1.2rem",
                }}
              />
              <label
                style={{ marginLeft: "0.5rem", backgroundColor: "#fefefe" }}
              >
                Phone calls
              </label>
            </CheckBox>
          </StyledGrid>
        </StyledCardContent>
        <Divider />
        <StyledBox
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <StyledButton>Save</StyledButton>
        </StyledBox>
      </StyledCard>
    </form>
  </div>
);

export default SettingsNotifications;
