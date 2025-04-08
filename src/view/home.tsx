import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import styles from "./home.module.css";
import ProfileAvatar from "../components/profiltAvatar/profileAvatar";
import AboutComponent from "../components/about/about";
import SkillsComponent from "../components/skills/skillsComponent";
import ExperienceDetails from "../components/experience/experienceDetails";
import EducationDetails from "../components/education/educationDetails";

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
        <Box bgcolor={"background.default"} className={styles.left_div}>
          <ProfileAvatar />
        </Box>

        <Box bgcolor={"background.default"} className={styles.right_div}>
          <AboutComponent />

          <SkillsComponent />

          <ExperienceDetails />

          <EducationDetails />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
