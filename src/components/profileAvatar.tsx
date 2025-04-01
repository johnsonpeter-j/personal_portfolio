import { Avatar, Card, Grid, Typography } from "@mui/material";
import styles from "./profileAvatar.module.css";

import ProfilePic from "../assets/images/profile_pic.png";
import { PersonalDetails } from "../data/personalDetails";
import ContactDetails from "./contactDetails";

const ProfileAvatar = () => {
  return (
    <Grid size={{ xs: 12, md: 3, lg: 3, sm: 12, xl: 3 }}>
      <Card className={styles.card_styles}>
        <Avatar alt="Johnson JP" sx={{ width: 56, height: 56 }}>
          <ProfilePic />
        </Avatar>
        <Typography variant="h6" gutterBottom>
          {PersonalDetails.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {PersonalDetails.role}
        </Typography>

        <ContactDetails label="Phone" value="" key="phone_contact"/>
      </Card>
    </Grid>
  );
};

export default ProfileAvatar;
