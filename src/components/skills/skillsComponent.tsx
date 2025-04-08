import { Avatar, Box, Card, Chip, Typography } from "@mui/material";
import styles from "./skillsComponent.module.css";

import FlutterLogo from "../../assets/images/skills/flutter_logo.png";
import ReactLogo from "../../assets/images/skills/react.png";
import NodeJSLogo from "../../assets/images/skills/nodejs_logo.png";
import TypescriptLogo from "../../assets/images/skills/typescript.png";
import JavascriptLogo from "../../assets/images/skills/javascript.png";
import AmchartsLogo from "../../assets/images/skills/amcharts.png";
import MongoLogo from "../../assets/images/skills/mongo-db.png";
import PostgresLogo from "../../assets/images/skills/postgres.png";
import FirebaseLogo from "../../assets/images/skills/firebase.png";
import MysqlLogo from "../../assets/images/skills/mysql.png";
import GithubLogo from "../../assets/images/skills/github.png";
import ExpressLogo from "../../assets/images/skills/express-js.png";

import { PersonalDetails } from "../../data/personalDetails";

const SkillsComponent = () => {
  const getSkillIcon = (skillItem: string) => {
    switch (skillItem.toUpperCase()) {
      case "REACT":
        return ReactLogo;
      case "NODE JS":
        return NodeJSLogo;
      case "TYPESCRIPT":
        return TypescriptLogo;
      case "JAVASCRIPT":
        return JavascriptLogo;
      case "FLUTTER":
        return FlutterLogo;
      case "AMCHARTS5":
        return AmchartsLogo;
      case "MONGO DB":
        return MongoLogo;
      case "POSTGRES":
        return PostgresLogo;
      case "MYSQL":
        return MysqlLogo;
      case "FIREBASE":
        return FirebaseLogo;
      case "GITHUB":
        return GithubLogo;
      case "EXPRESS JS":
        return ExpressLogo;
      default:
        return FlutterLogo;
    }
  };
  return (
    <Card className="card_styles">
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <Box className={styles.skills_container}>
        {PersonalDetails.skills.map((skillItem: string) => (
          <Chip
            avatar={<Avatar alt="F" src={getSkillIcon(skillItem)} />}
            label={skillItem}
            className={styles.chip_styles}
            variant="outlined"
          />
        ))}
      </Box>
    </Card>
  );
};

export default SkillsComponent;
