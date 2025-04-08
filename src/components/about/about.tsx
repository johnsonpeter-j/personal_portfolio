import {  Card,  Typography } from "@mui/material";
import { PersonalDetails } from "../../data/personalDetails";

const AboutComponent = () => {
  return (
      <Card className="card_styles">
        <Typography variant="h5" gutterBottom>
          About Me
        </Typography>
        <br />
        {PersonalDetails.about.map((aboutItem, aboutIndex) => (
          <>
            <Typography variant="subtitle1" gutterBottom>
              {aboutItem}
            </Typography>
            {aboutIndex < PersonalDetails.about.length - 1 && <br />}
          </>
        ))}
      </Card>
      );
};
export default AboutComponent;
