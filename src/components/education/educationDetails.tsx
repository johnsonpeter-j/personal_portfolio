import {
  Card,
  Typography,
} from "@mui/material";
import { PersonalDetails } from "../../data/personalDetails";

const EducationDetails = () => {
  return (
    <Card className="card_styles">
      <Typography variant="h5" gutterBottom>
        Experience
      </Typography>
      <br />

      {PersonalDetails.education.map((educationItem, educationIndex) => {
        return (
          <>
            <Typography variant="body1" gutterBottom>
              {educationItem.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {educationItem.degree} / {educationItem.year}
            </Typography>
          </>
        );
      })}
    </Card>
  );
};

export default EducationDetails;
