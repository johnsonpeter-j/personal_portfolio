import {
  Box,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import styles from "./home.module.css";
import ProfileAvatar from "../components/profiltAvatar/profileAvatar";
import AboutComponent from "../components/about/about";
import SkillsComponent from "../components/skills/skillsComponent";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box className={styles.main_box} bgcolor={"background.default"}>
        <Grid
          container
          spacing={1}
          size={{ xs: 12, md: 12, lg: 12, sm: 12, xl: 12 }}
        >
          <ProfileAvatar />

          <AboutComponent />

          <SkillsComponent />
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
