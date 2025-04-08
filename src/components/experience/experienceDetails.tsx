import {
  Card,
  Typography,
} from "@mui/material";
import { PersonalDetails } from "../../data/personalDetails";

const ExperienceDetails = () => {
  return (
    <Card className="card_styles">
      <Typography variant="h5" gutterBottom>
        Experience
      </Typography>
      <br />

      {PersonalDetails.experience.map((experienceItem, experienceIndex) => {
        return (
          <>
            <Typography variant="body1" gutterBottom>
              {experienceItem.companyName}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {experienceItem.role} / {experienceItem.year}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {experienceItem.description}
            </Typography>
          </>
        );
      })}
    </Card>
  );
};

export default ExperienceDetails;
