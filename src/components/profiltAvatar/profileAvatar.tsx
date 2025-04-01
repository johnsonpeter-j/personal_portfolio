import { Avatar, Box, Card, Grid, IconButton, Typography } from "@mui/material";
import styles from "./profileAvatar.module.css";

import ProfilePic from "../../assets/images/my_pic.png";
import { PersonalDetails } from "../../data/personalDetails";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ProfileAvatar = () => {
  return (
    <Grid  size={{ xs: 12, md: 3, lg: 3, sm: 12, xl: 3 }}>
      <Card className={`${styles.avatar_card_styles} card_styles`}>
        <Avatar
          alt="Johnson JP"
          src={ProfilePic}
          sx={{ width: 145, height: 145 }}
        ></Avatar>
        <Typography variant="h6" gutterBottom>
          {PersonalDetails.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {PersonalDetails.role}
        </Typography>

        <Box>
          <Box className={styles.contact_div}>
            <Box>
              <PhoneIphoneIcon />
            </Box>
            <Box>{PersonalDetails.phone}</Box>
          </Box>

          <Box className={styles.contact_div}>
            <Box>
              <EmailIcon />
            </Box>
            <Box>{PersonalDetails.email}</Box>
          </Box>

          <Box className={styles.contact_div}>
            <Box>
              <LocationOnIcon />
            </Box>
            <Box>{PersonalDetails.location}</Box>
          </Box>
        </Box>

        <Box className={styles.social_media_div}>
          <IconButton
            onClick={() =>
              window.open(
                PersonalDetails.linkedin,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                PersonalDetails.github,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Card>
    </Grid>
  );
};

export default ProfileAvatar;
