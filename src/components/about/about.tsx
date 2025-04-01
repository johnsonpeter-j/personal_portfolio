import {  Card, Grid, Typography } from "@mui/material";
import { PersonalDetails } from "../../data/personalDetails";

const AboutComponent = () => {
  return (
    <Grid size={{ xs: 12, md: 9, lg: 9, sm: 12, xl: 9 }}>
      <Card className="card_styles">
        <Typography variant="h3" gutterBottom>
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
    </Grid>
  );
};
export default AboutComponent;
