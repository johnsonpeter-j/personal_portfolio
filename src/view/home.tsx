import { Box, Grid } from "@mui/material";
import styles from "./home.module.css";
import ProfileAvatar from "../components/profileAvatar";

const HomePage = () => {
  return (
    <Box className={styles.main_box}>
      <Grid
        container
        spacing={1}
        size={{ xs: 12, md: 12, lg: 12, sm: 12, xl: 12 }}
      >
        <ProfileAvatar />
      </Grid>
    </Box>
  );
};

export default HomePage;
