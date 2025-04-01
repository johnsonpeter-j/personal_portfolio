import { Box, Typography } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

interface ContactDetailsProps {
  label: string;
  value: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ label, value }) => {
  const getIconForLabel = () => {
    switch (label.toUpperCase()) {
      case "PHONE":
        return <WhatsAppIcon />;
      case "EMAIL":
        return <EmailIcon />;
      case "LINKEDIN":
        return <LinkedInIcon />;
      case "GITHUB":
        return <GitHubIcon />;
      default:
        return <WhatsAppIcon />;
    }
  };

  return (
    <Box>
      <Box>{getIconForLabel()}</Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          {label}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactDetails;