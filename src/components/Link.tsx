import React from "react";
import { Link as MuiLink, Typography } from "@mui/material";
interface CustomLinkProps {
  url: string;
  color: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ url, color, children }) => {
  return (
    <MuiLink href={url} style={{ color }}>
      <Typography variant="body1" component="span">
        {children}
      </Typography>
    </MuiLink>
  );
};

export default CustomLink;
